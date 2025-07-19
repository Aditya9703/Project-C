import React from 'react'

function Footer() {
  return (
    <div className='bg-[#181B43] w-full py-[40px] px-[64px] flex justify-center items-center'>

        <div className='flex w-full gap-[40px] justify-between items-start'>

                <div className='flex gap-[20px] flex-col'>
                    <p className='w-[133px] h-[20px] text-[16px] leading-[20px] text-[#F8FAFC]' style={{fontFamily:"'Gilroy-Bold', sans-serif", fontWeight:"700"}}>ABOUT US</p>
                    <div className='flex gap-[20px] w-full flex-col'>
                        <a href="" className='w-[133px] h-[20px] text-[14px] leading-[20px] text-[#F8FAFC]' style={{fontFamily:"'Gilroy', sans-serif ", fontWeight:"200"}}>Join our Community</a>
                        <a href="" className='w-[133px] h-[20px] text-[14px] leading-[20px] text-[#F8FAFC]' style={{fontFamily:"'Gilroy', sans-serif ", fontWeight:"200"}}>Success Stories</a>
                        <a href="" className='w-[133px] h-[20px] text-[14px] leading-[20px] text-[#F8FAFC]' style={{fontFamily:"'Gilroy', sans-serif ", fontWeight:"200"}}>Blogs</a>
                        <a href="" className='w-[133px] h-[20px] text-[14px] leading-[20px] text-[#F8FAFC]' style={{fontFamily:"'Gilroy', sans-serif ", fontWeight:"200"}}>Events</a>
                        <a href="" className='w-[133px] h-[20px] text-[14px] leading-[20px] text-[#F8FAFC]' style={{fontFamily:"'Gilroy', sans-serif ", fontWeight:"200"}}>Terms & Conditions</a>
                        <a href="" className='w-[133px] h-[20px] text-[14px] leading-[20px] text-[#F8FAFC]' style={{fontFamily:"'Gilroy', sans-serif ", fontWeight:"200"}}>Refund Policy</a>
                    </div>
                </div>

                <div className=' gap-[12px] flex flex-col'>
                     <p className='w-[180px] h-[20px] text-[16px] leading-[20px] text-[#F8FAFC]' style={{fontFamily:"'Gilroy-Bold', sans-serif", fontWeight:"700"}}>POPULAR PROGRAMS</p>

                     <div className='w-full flex flex-col gap-[20px]'>
                        <div className='flex gap-[12px]  items-center' >
                            <img src="/images/foot1.jpg" alt="image"  className='rounded-[3.81px] w-[116px] h-[64px]'/>
                            <p className='w-[166px] h-[20px] text-[14px] leading-[20px] text-[#F8FAFC]' style={{fontFamily:"'Gilroy-Bold', sans-serif", fontWeight:"400"}}>Tech Fellowship Program</p>

                        </div>

                        <div className='flex gap-[12px] items-center' >
                            <img src="/images/foot2.png" alt="image"  className='rounded-[3.81px] w-[116px] h-[64px]'/>
                            <p className='w-[254px] h-[20px] text-[14px] leading-[20px] text-[#F8FAFC]' style={{fontFamily:"'Gilroy-Bold', sans-serif", fontWeight:"400"}}>Renaissance for Top Tech Companies</p>

                        </div>

                        <div className='flex gap-[12px] items-center' >
                            <img src="/images/foot3.png" alt="image"  className='rounded-[3.81px] w-[116px] h-[64px]'/>
                            <p className='w-[218px] h-[20px] text-[14px] leading-[20px] text-[#F8FAFC]' style={{fontFamily:"'Gilroy-Bold', sans-serif", fontWeight:"400"}}>Low Level Design & Concurrency</p>

                        </div>
                     </div>
                </div>


                <div className='flex gap-[20px] flex-col'>
                    <p className='w-[133px] h-[20px] text-[16px] leading-[20px] text-[#F8FAFC]' style={{fontFamily:"'Gilroy-Bold', sans-serif", fontWeight:"700"}}>MORE COURSES</p>
                    <div className='flex gap-[20px] w-full flex-col'>
                        <a href="" className='w-[303px] h-[20px] text-[14px] leading-[20px] text-[#F8FAFC]' style={{fontFamily:"'Gilroy', sans-serif ", fontWeight:"200"}}>Backend Development with Java Spring Boot</a>
                        <a href="" className='w-[303px] h-[20px] text-[14px] leading-[20px] text-[#F8FAFC]' style={{fontFamily:"'Gilroy', sans-serif ", fontWeight:"200"}}>Data Structures & Algorithms Essential</a>
                        <a href="" className='w-[303px] h-[20px] text-[14px] leading-[20px] text-[#F8FAFC]' style={{fontFamily:"'Gilroy', sans-serif ", fontWeight:"200"}}>Become a Python Expert</a>
                        <a href="" className='w-[303px] h-[20px] text-[14px] leading-[20px] text-[#F8FAFC]' style={{fontFamily:"'Gilroy', sans-serif ", fontWeight:"200"}}>Begin with Programming in C++</a>
                        <a href="" className='w-[303px] h-[20px] text-[14px] leading-[20px] text-[#F8FAFC]' style={{fontFamily:"'Gilroy', sans-serif ", fontWeight:"200"}}>Frontend Engineering Pro</a>
                    </div>
                </div>

                <div className='flex flex-col gap-[40px]'>

                    <div className='flex flex-col gap-[12px]'>
                      <p className='w-[271px] h-[20px] text-[16px] leading-[20px] text-[#F8FAFC]' style={{fontFamily:"'Gilroy-Bold', sans-serif", fontWeight:"700"}}>CONTACT US</p>

                      <div className='flex flex-col gap-[20px]'>

                        <div className='flex items-center gap-[8px]'>
                            <img src="/images/phone.png" alt="" height="24px" width="24px"/>
                            <p href="" className='w-[108px] h-[20px] text-[14px] leading-[20px] text-[#F8FAFC]' style={{fontFamily:"'Gilroy', sans-serif ", fontWeight:"200"}}>+91 9871723495</p>

                        </div>

                        <div className='flex items-center gap-[8px]'>
                            <img src="/images/location.png" alt="" height="24px" width="24px"/>
                            <p href="" className='w-[240px] h-[40px] text-[14px] leading-[20px] text-[#F8FAFC]' style={{fontFamily:"'Gilroy', sans-serif ", fontWeight:"200"}}>514, Iconic Corenthum Tower, Noida Sector 62, Noida.</p>

                        </div>

                        <div className='flex items-center gap-[8px]'>
                            <img src="/images/mail.png" alt="" height="24px" width="24px"/>
                            <p href="" className='w-[230px] h-[20px] text-[14px] leading-[20px] text-[#F8FAFC]' style={{fontFamily:"'Gilroy', sans-serif ", fontWeight:"200"}}>help@programmingpathshala.com</p>

                        </div>

                      </div>

                     

                    </div>

                     <div className='flex flex-col gap-[12px]'>
                        <p className='w-[196px] h-[20px] text-[16px] leading-[20px] text-[#F8FAFC]' style={{fontFamily:"'Gilroy-Bold', sans-serif", fontWeight:"700"}}>SOCIAL LINKS</p>
                        <div className='flex gap-[12px]'>

                             <a href="https://google.com" target='blank'><div className='rounded-[50%] flex justify-center items-center bg-[#FFFFFF] w-[40px] h-[40px]'>
                                <img  src='/images/youtube.png' height="24px" width="24px"/>
                            </div> </a>

                            <a href="https://google.com" target='blank'><div className='rounded-[50%] flex justify-center items-center bg-[#FFFFFF] w-[40px] h-[40px]'>
                                <img  src='/images/insta.png' height="24px" width="24px"/>
                            </div> </a>
                            <a href="https://google.com" target='blank'><div className='rounded-[50%] flex justify-center items-center bg-[#FFFFFF] w-[40px] h-[40px]'>
                                <img  src='/images/linkedin.png' height="24px" width="24px"/>
                            </div> </a>
                            <a href="https://google.com" target='blank'><div className='rounded-[50%] flex justify-center items-center bg-[#FFFFFF] w-[40px] h-[40px]'>
                                <img  src='/images/facebook.png' height="24px" width="24px"/>
                            </div> </a>

                        </div>

                        
                      </div>

                      <div>
                            <p  className='w-[325px] h-[20px] text-[14px] leading-[20px] text-[#F8FAFC] font-light' style={{fontFamily:"'Gilroy', sans-serif "}}>All Right Reserved with @Programming Pathshala</p>

                        </div>

                </div>

        </div>



    </div>
  )
}

export default Footer