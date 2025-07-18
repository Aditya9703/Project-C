import React from 'react'
import CareerCard from './CareerCard'

function Career() {
  return (
    <div className='w-[full] px-[64px] py-[60px] gap-[40px] bg-[#292C33] flex flex-col justify-center items-center' >

        <h2 className='w-[481px] h-[64px] text-[#F8FAFC] text-[48px] leading-[64px] tracking-[4%] ' style={{ color: "#F8FAFC", fontFamily: "'Gilroy', sans-serif", fontWeight:"700" }}>Career Accelerators</h2>    
        <div className='grid gap-[32px] w-[1081px] grid-cols-3 grid-rows-2'>
            
            <CareerCard heading = "Coding Assessment" pic = "/images/card1.svg"
            subHeading="Invite +5 friend to unlock" subColor="#3940A0"/>

            <CareerCard heading = "Renaissance Course" pic = "/images/card2.svg"
            subHeading="Invite +10 friend to unlock" subColor="#3940A0"/>

            <CareerCard heading = "Resume Review" pic = "/images/card3.svg"
            subHeading="Invite +10 friend to unlock" subColor="#3940A0"/>

            <CareerCard heading = "Renaissance Course" pic = "/images/card4.svg" 
            subHeading="Invite +10 friend to unlock" subColor="#3940A0"/>

            <CareerCard heading = "1 Mock Interview" pic = "/images/card5.svg"
            subHeading="Invite +10 friend to unlock" subColor="#3940A0"/>

            <CareerCard heading = "Mentorship with Founders" pic = "/images/card6.jpg"
            subHeading="Invite +100 friend to unlock" subColor="#020617" background = "#FCD34D"/>

            

            

            

          

        </div>

    </div>
  )
}

export default Career