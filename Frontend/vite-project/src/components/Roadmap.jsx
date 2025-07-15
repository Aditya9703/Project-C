import React from 'react'

const Roadmap = () => {
  return (
    <div>
      <div className='w-full h-[986px] bg-[#292C33] py-[100px] flex flex-col gap-[40px] justify-center items-center'>

        <h1 className='w-full h-[64px] font-bold text-[48px] leading-[64px] text-center tracking-[4%]' style={{ color: "#F8FAFC", fontFamily: "'Gilroy', sans-serif" }}
>How to unlock Career Accelerators?</h1>

        <div className='w-full h-[554px]'>
            <img src='/images/roadmap.svg' alt = "roadmap" className="h-full w-full" draggable="false"/>
        </div>

        <div className='flex flex-row gap-[40px]'>
              <div className='w-[194px] h-[88px] bg-[#F8FAFC] rounded-md p-[12px] flex flex-col justify-center items-center gap-[4px]'>
                <div className='w-[80px] h-[32px] flex flex-col justify-center items-center'>
                  <p style={{fontFamily:"'Gilroy',sans-serif", fontWeight:"500"}} className='leading-[16px] text-[14px]'>Sign Up</p> 
                 <span className='leading-[16px] text-[12px] text-[#64748B]'>(Bonus Points)</span> 
                 </div>
                 <div className='flex gap-[4px] px-[8px] py-[4px] bg-[#B45309] h-[28px] w-[151px] rounded-sm'>
                    <img src='/images/coin.png' className='w-[16px] h-[20px]'/>
                    <p style={{fontFamily:"'Gilroy',sans-serif", fontWeight:"500"}} className='leading-[20px] text-[14px] text-[#F8FAFC] font-bold'>+10 Karma Points</p>
                 </div> 
              </div>


              <div className='w-[194px] h-[88px] bg-[#F8FAFC] rounded-md p-[12px] flex flex-col justify-center items-center gap-[4px]'>

                    <div className='w-[80px] h-[32px] flex flex-col justify-center items-center'>
  <div>
    <p className='text-[14px] leading-[16px] font-medium' style={{ fontFamily: "'Gilroy', sans-serif" }}>
      Refer&nbsp;
      <span className='text-[16px] leading-[16px] font-bold align-baseline' style={{ fontFamily: "'Gilroy', sans-serif" }}>
        1
      </span>&nbsp;Friend
    </p>
  </div>
  <span className='leading-[16px] text-[12px] text-[#64748B]'>(Each Invite)</span>
</div>
                 <div className='flex gap-[4px] px-[8px] py-[4px] bg-[#B45309] h-[28px] w-[151px] rounded-sm'>
                    <img src='/images/coin.png' className='w-[16px] h-[20px]'/>
                    <p style={{fontFamily:"'Gilroy',sans-serif", fontWeight:"500"}} className='leading-[20px] text-[14px] text-[#F8FAFC] font-bold'>+10 Karma Points</p>
                 </div> 
              </div>

              <div className='w-[194px] h-[88px] bg-[#F8FAFC] rounded-md p-[12px] flex flex-col justify-center items-center gap-[4px]'>
                <div className='w-auto h-[32px] flex flex-col justify-center items-center'>
  <div>
    <p className='text-[14px] leading-[16px] font-medium' style={{ fontFamily: "'Gilroy', sans-serif" }}>
      Invite&nbsp;
      <span className='text-[16px] leading-[16px] font-bold align-baseline' style={{ fontFamily: "'Gilroy', sans-serif" }}>
        3
      </span>&nbsp;Friends
    </p>
  </div>
  <span className='leading-[16px] text-[12px] text-[#64748B]'>(Same day to earn&nbsp;<span className='text-[16px] text-[#DC2626] font-bold'>2x</span>&nbsp;points)</span>
</div>
                 <div className='flex gap-[4px] px-[8px] py-[4px] bg-[#B45309] h-[28px] w-[151px] rounded-sm'>
                    <img src='/images/coin.png' className='w-[16px] h-[20px]'/>
                    <p style={{fontFamily:"'Gilroy',sans-serif", fontWeight:"500"}} className='leading-[20px] text-[14px] text-[#F8FAFC] font-bold'>+60 Karma Points</p>
                 </div> 
              </div>

              <div className='w-[194px] h-[88px] bg-[#F8FAFC] rounded-md p-[12px] flex flex-col justify-center items-center gap-[4px]'>
                <div className='w-auto h-[32px] flex flex-col justify-center items-center'>
  <div>
    <p className='text-[14px] leading-[16px] font-medium' style={{ fontFamily: "'Gilroy', sans-serif" }}>
      Invite&nbsp;
      <span className='text-[16px] leading-[16px] font-bold align-baseline' style={{ fontFamily: "'Gilroy', sans-serif" }}>
        5
      </span>&nbsp;Friends
    </p>
  </div>
  <span className='leading-[16px] text-[12px] text-[#64748B]'>(Same day to earn&nbsp;<span className='text-[16px] text-[#DC2626] font-bold'>3x</span>&nbsp;points)</span>
</div>
                 <div className='flex gap-[4px] px-[8px] py-[4px] bg-[#B45309] h-[28px] w-auto rounded-sm'>
                    <img src='/images/coin.png' className='w-[16px] h-[20px]'/>
                    <p style={{fontFamily:"'Gilroy',sans-serif", fontWeight:"500"}} className='leading-[20px] text-[14px] text-[#F8FAFC] font-bold'>+150 Karma Points</p>
                 </div> 
              </div>
        </div>

      </div>
    </div>
  )
}

export default Roadmap;
