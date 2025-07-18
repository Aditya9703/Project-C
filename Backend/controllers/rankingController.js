import User from '../models/User.js';

export const getTopUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ score: -1 }).limit(10);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching rankings' });
  }
};