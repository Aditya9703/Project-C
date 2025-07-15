import React from 'react'

const Roadmap = () => {
  return (
    <div>
      <div className='w-full h-[986px] bg-[#292C33] py-[100px] flex flex-col gap-[40px] justify-center items-center'>

        <h1 className='w-full h-[64px] font-bold text-[48px] leading-[64px] text-center tracking-[4%]' style={{ color: "#F8FAFC", fontFamily: "'Gilroy', sans-serif" }}
>How to unlock Career Accelerators?</h1>

        <div className='w-full h-[554px]'>
            <img src='/images/roadmap.svg' alt = "roadmap" className="h-full w-full"/>
        </div>

        <div className='flex flex-row gap-[40px]'>
              <div className='w-[194px] h-[88px] bg-[#F8FAFC] rounded-md p-[12px] flex flex-col justify-center items-center'></div>
        </div>

      </div>
    </div>
  )
}

export default Roadmap;
