import React from 'react'
import WorkCard from './WorkCard'

function Work() {
  return (
    <div className='px-[64px] py-[60px] bg-[#14171F] w-full flex flex-col gap-[40px]'>
            <h1 className='text-[48px]/[64px] w-full h-[64px] text-center text-neutral-50' style={{fontFamily:"'Gilroy', sans-serif"}}>
                How does it work?
            </h1>

            <div className='w-full flex gap-[24px] justify-between'>
                <WorkCard step="Step 1" image="/images/work1.png" para="Join in for Live Sessions"/>
                <WorkCard step="Step 2" image="/images/work2.png" para="Indulge in Problem Solving"/>
                <WorkCard step="Step 3" image="/images/work3.png" para="Invite Friends & earn Karma Points"/>
                <WorkCard step="Step 4" image="/images/work4.png" para="Unlock Career Accelerators"/>
            </div>
    </div>
  )
}

export default Work