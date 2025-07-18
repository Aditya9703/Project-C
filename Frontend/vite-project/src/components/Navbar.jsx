import React , {useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Navbar() {
    const [dropDown , setDropDown] = useState(false);
    const [dropDown2 , setDropDown2] = useState(false);

  return (
    <div className='h-[96px] w-full border-b-1 px-[74px] py-[24px] 'style={{fontFamily: "'Gilroy' , sans-serif"}}>
          <nav className="navbar">
            <div className="flex w-[1312px] gap-[52px]">
              <div className='w-[260px] h-[40px]'>
                <img src="/images/LOGO.png" alt="" />
              </div>
              <div className='flex gap-[20px]'>
              <div>
                <div className=' w-[148px] h-[24px]'>
                <p className='text-center  font-normal text-[16px]/[24px]'>Fellowship program</p>
                </div>
                <div>
              <Link to="/">Launch tech Career</Link>
              </div>
              </div>
              <div>
                <p className='text-center'>Renaissance</p>
              <Link to="/">Interview Preperation</Link>
              </div>
              <div className='relative'>
                <div>
                    <button onClick={() => {setDropDown(!dropDown)}}>
                        Certification Courses
                    </button>
                </div>
                    {dropDown &&
                    (
                        <div className='absolute top-full left-0 bg-white border shadow-lg z-50'>
                            <ul>
                                <li>link1</li>
                                <li>link2</li>
                                <li>link3</li>
                                <li>link4</li>
                            </ul>
                        </div>
                    )
                    }
              </div>

              <div className='relative'>
                <div>
                    <button onClick={() => {setDropDown2(!dropDown2)}}>
                        Resources
                    </button>
                </div>
                    {dropDown2 &&
                    (
                        <div  className='absolute top-full left-0 bg-white border shadow-lg z-50'>
                            <ul>
                                <li>link1</li>
                                <li>link2</li>
                                <li>link3</li>
                                <li>link4</li>
                            </ul>
                        </div>
                    )
                    }
              </div>
              </div>
            </div>
          </nav>
    </div>
  )
}

export default Navbar;