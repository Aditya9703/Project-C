import React, { useState, useEffect, useRef } from 'react';


const countries = [
  { name: 'India', code: '+91', flag: '/images/ind.png' },
  { name: 'United States', code: '+1', flag: 'https://placehold.co/24x18/E53935/FFFFFF?text=US' },
  { name: 'United Kingdom', code: '+44', flag: 'https://placehold.co/24x18/1E88E5/FFFFFF?text=UK' },
  { name: 'Australia', code: '+61', flag: 'https://placehold.co/24x18/43A047/FFFFFF?text=AU' },
  { name: 'Canada', code: '+1', flag: 'https://placehold.co/24x18/D81B60/FFFFFF?text=CA' },
];

function Hero() {


  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const wrapperRef = useRef(null);

  // This effect handles closing the dropdown if you click outside of it.
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);


  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    // You can add any other logic you need when a country is selected
    console.log("Selected country:", country);
  };

   const [isSignUp, setIsSignUp] = useState(true);
    
  return (
    <div className='w-full flex justify-center items-center bg-[#14171F] py-[60px] px-16'>

        <div className='flex justify-between w-full '>
            {/* left */}

            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-3 px-6 py-2 bg-[#FEF3C7] rounded-[8px] w-fit'>
                        <img src="/images/star.png" alt="star" className='w-5 h-5' />
                        <p className='w-36 h-6 text-[16px]/[24px] text-yellow-600 text-center' style={{fontFamily:"'Gilroy-Medium', sans-serif"}}>Build Skills For Free</p>
                    </div>
                    <p className='w-[660px] h-[160px] text-[72px]/[80px] text-neutral-50' style={{fontFamily:"'Gilroy', sans-serif"}}>Code Every Day with Vivek </p>
                    <div className='flex gap-2 text-[24px]/[32px] text-yellow-300' style={{fontFamily:"'Gilroy', sans-serif"}}>

                        <p className='w-[241px] h-10 '>Learn What Matters<span className='text-[40px]/[40px] text-neutral-50'>.</span></p>
                        <p className='w-[231px] h-10 '>Sharpen Your Skills<span className='text-[40px]/[40px] text-neutral-50'>.</span></p>
                        <p className='w-[171px] h-10 '>Stay Relevant<span className='text-[40px]/[40px] text-neutral-50'>.</span></p>

                    </div>


                </div>

                <div className='flex flex-col gap-5 text-neutral-50' style={{fontFamily:"'Gilroy-Regular', sans-serif"}}>
                    <div className='flex gap-3'>
                        <div className='flex justify-center items-center bg-[#292C33] py-3 px-4 gap-2 rounded-4xl'>
                            <p className='w-[142px] h-6 text-[16px]/[24px]'>1% Better Everyday</p>
                           
                        </div>
                        <div className='flex justify-center items-center bg-[#292C33] py-3 px-4 gap-2 rounded-4xl'>
                            <p className='w-[191px] h-6 text-[16px]/[24px]'>Improve Problem-Solving</p>
                        </div>
                        <div className='flex justify-center items-center bg-[#292C33] py-3 px-4 gap-2 rounded-4xl'>
                            
                           
                            <p className='w-[207px] h-6 text-[16px]/[24px]'>Unlock Career Accelerators</p>
                        </div>
                    </div>

                    <div className='flex gap-3'>
                        <div className='flex justify-center items-center bg-[#292C33] py-3 px-4 gap-2 rounded-4xl'>
                            <p className='w-[137px] h-6 text-[16px]/[24px]'>Earn Karma Points</p>
                           
                        </div>
                        <div className='flex justify-center items-center bg-[#292C33] py-3 px-4 gap-2 rounded-4xl'>
                            <p className='w-[157px] h-6 text-[16px]/[24px]'>Community Support</p>
                        </div>
                        
                    </div>


                </div>          




            </div>




            {/* right */}

            <div className='flex flex-col bg-[#292C33] p-6 gap-8 rounded-[20px] text-[16px]/[24px] text-neutral-50 font-normal' style={{fontFamily:"'Gilroy',sans-serif"}}>

                <div className='flex flex-col gap-3 items-center'>

                    <div className='flex gap-5 p-2 rounded-xl bg-[#14171F]'>
                        <button onClick={() => setIsSignUp(true)} className={`flex justify-center items-center rounded-md py-2 px-4 bg-[${isSignUp ? '#292C33' :'#14171F'}] w-[140px] cursor-pointer`}>
                            <p  className='w-[59px] h-6'>Sign Up</p>
                        </button>
                        <button onClick={() => setIsSignUp(false)} className={`flex justify-center items-center rounded-md py-2 px-4 bg-[${!isSignUp ? '#292C33' :'#14171F'}] w-[140px] cursor-pointer`}>
                            <p className='w-[59px] h-6'>Log In</p>
                        </button>
                    </div>
                    <form>
                    <div className='flex gap-3 flex-col'>
                        <div className='flex gap-3 flex-col'>
                            {
                                isSignUp && (<div className='flex gap-2 flex-col'>
                                <p className='w-[45px] h-6'>Name</p>
                                <input type="text" name="name" placeholder="Enter full name" className="w-[450px] h-11 py-2 px-5 bg-[#14171F] rounded-md text-neutral-200 font-normal" style={{fontFamily:"'Gilroy-Regular'"}}/>
                            </div>)
                            }
                            

                            <div className='flex gap-2 flex-col'>
                                <p className='w-[45px] h-6'>Email</p>
                                <input type="email" name="email" placeholder="Enter email address" className="w-[450px] h-11 py-2
                                px-5 bg-[#14171F] rounded-md text-neutral-200 font-normal" style={{fontFamily:"'Gilroy-Regular'"}}/>
                            </div>


                            {
                                isSignUp && ( <div className="relative w-full gap-2 flex flex-col" ref={wrapperRef}>
                                <p className='w-[147px] h-6'>WhatsApp Number</p>
                            <div className="flex items-center">
                                {/* This is the button that shows the selected country and opens the dropdown */}
                                <button
                                type="button"
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center justify-center h-11 px-3 bg-[#14171F] rounded-l-md "
                                >
                                <img src={selectedCountry.flag} alt={`${selectedCountry.name} flag`} className="w-6 h-auto rounded-sm" />
                                <span className="ml-2 text-neutral-200">{selectedCountry.code}</span>
                                <svg className={`w-5 h-5 ml-1 text-neutral-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>
                                
                                {/* The phone number input field */}
                                <input 
                                    input type="tel" name="phone" placeholder="Enter 10-digit number" className="w-full h-11 py-2 px-5 bg-[#14171F] rounded-r-md text-neutral-200 font-normal" style={{fontFamily:"'Gilroy-Regular'"}}
                                />
                            </div>

                            {/* The dropdown list of countries */}
                            {isOpen && (
                                <div className="absolute z-10 mt-1 w-full bg-[#292C33] rounded-md shadow-lg max-h-60 overflow-auto">
                                <ul className="py-1">
                                    {countries.map((country) => (
                                    <li
                                        key={country.name}
                                        onClick={() => handleSelect(country)}
                                        className="flex items-center px-4 py-2 text-sm text-neutral-200 hover:bg-[#14171F] cursor-pointer"
                                    >
                                        <img src={country.flag} alt={`${country.name} flag`} className="w-6 h-auto mr-3 rounded-sm" />
                                        <span>{country.name} ({country.code})</span>
                                    </li>
                                    ))}
                                </ul>
                                </div>
                            )}
                            </div>)
                            }
                            

                            <div className='flex gap-2 flex-col'>
                                <p className='w-[130px] h-6'>{isSignUp ? 'Create Password':'Password'}</p>
                                <input type="password" name="password" placeholder={isSignUp?'Create a password (min. 6 characters)':'Enter your password'} className="w-[450px] h-11 py-2
                                px-5 bg-[#14171F] rounded-md text-neutral-200 font-normal" style={{fontFamily:"'Gilroy-Regular'"}}/>
                            </div>


                            <button className='w-full rounded-[10px] px-2 py-3 bg-[#3940A0] flex items-center justify-center gap-2'>
                                {isSignUp ? ( <> <p>Start Coding Now!</p>
                                <img src="/images/Rocket.png" alt="rocket" className='w-4 h-4' /> </>):<p>Log In</p>}
                               
                            </button>
                        </div>
                    </div>
                    </form>

                </div>

            </div>




        </div>


    </div>
  )
}

export default Hero