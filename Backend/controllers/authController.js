import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import shortid from 'shortid';

export const registerUser = async (req, res) => {
  const { name, email, password, referralCode } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newReferralCode = shortid.generate();

    let score = 0;
    let referredBy = null;

    if (referralCode) {
      const referrer = await User.findOne({ referralCode });
      if (referrer) {
        referrer.score += 10;
        await referrer.save();
        score += 10;
        referredBy = referralCode;
      }
    }

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      referralCode: newReferralCode,
      referredBy,
      score,
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { id: user._id, name: user.name, score: user.score } });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};