import React from 'react'

function Footer() {
  return (
    <div className='bg-[#181B43] w-full py-[40px] px-[64px] flex justify-center items-center'>

        <div className='flex w-full gap-[40px] justify-between items-center'>

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

        </div>



    </div>
  )
}

export default Footer