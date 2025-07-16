import React , {useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Navbar() {
    const [dropDown , setDropDown] = useState(false);
    const [dropDown2 , setDropDown2] = useState(false);

  return (
    <div>
          <nav className="navbar">
            <div className="nav-links flex flex-row items-center font-25px justify-evenly">
              <div>
                <p>Fellowship program</p>
              <Link to="/">Launch tech Career</Link>
              </div>
              <div>
                <p>Renaissance</p>
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
                        Certification Courses
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
          </nav>
    </div>
  )
}

export default Navbar;