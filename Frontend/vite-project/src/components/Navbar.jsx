
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
function Navbar() {


  return (
    <div className='h-[96px] w-full border-b-1 px-[64px] border-neutral-200 py-[24px] flex justify-center items-center'>
          <nav className="navbar">
            <div className="flex w-[1312px] gap-[52px] items-center">
              <div className='w-[260px] h-[40px]'>
                <img src="/images/LOGO.png" alt="" />
              </div>
              <div className='flex gap-[20px] items-center'>
              <div className='flex flex-col items-center cursor-pointer'>
              
                <p className='font-normal text-[16px]/[24px] w-[148px] h-[24px] text-[#231F20]' style={{fontFamily: "'Gilroy-Medium' , sans-serif"}}>Fellowship program</p>
         
              
                <p className='text-[10px]/[12px] text-[#5A74D7] w-[95px] h-[12px]' style={{fontFamily: "'Gilroy-Medium' , sans-serif"}}>Launch Tech Career</p>
           
              </div>
              <div className='flex flex-col items-center cursor-pointer'>
              
                <p className='font-normal text-[16px]/[24px] w-[96px] h-[24px] text-[#231F20]' style={{fontFamily: "'Gilroy-Medium' , sans-serif"}}>Renaissance</p>
         
              
                <p className='text-[10px]/[12px] text-[#5A74D7] w-[96px] h-[12px]' style={{fontFamily: "'Gilroy-Medium' , sans-serif"}}>Interview Prepration</p>
           
              </div>
             
              <div className='flex flex-col items-center cursor-pointer'>
                  <div className='flex gap-[4px] items-center justify-between'>
                      <p className='font-normal text-[16px]/[24px] w-[161px] h-[24px] text-[#231F20]' style={{fontFamily: "'Gilroy-Medium' , sans-serif"}}>Certification Courses</p>
                      <FontAwesomeIcon icon={faAngleDown} className="w-4 h-4 text-[#231F20]" />

                  </div>
                      <p className='text-[10px]/[12px] text-[#5A74D7] w-[181px] h-[12px] text-center' style={{fontFamily: "'Gilroy-Medium' , sans-serif"}}>In-Demand Skills</p>

              </div>
              <div className='flex flex-col items-center cursor-pointer'>
                  <div className='flex gap-[4px] items-center justify-between'>
                      <p className='font-normal text-[16px]/[24px] w-[77px] h-[24px] text-[#231F20]' style={{fontFamily: "'Gilroy-Medium' , sans-serif"}}>Resources</p>
                      <FontAwesomeIcon icon={faAngleDown} className="w-4 h-4 text-[#231F20]" />

                  </div>
                      <p className='text-[10px]/[12px] text-[#5A74D7] w-[65px] h-[12px] text-center' style={{fontFamily: "'Gilroy-Medium' , sans-serif"}}>Free Learning</p>

              </div>


              

              </div>
            </div>
          </nav>
    </div>
  )
}

export default Navbar;