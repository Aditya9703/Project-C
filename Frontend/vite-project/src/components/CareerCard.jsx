import React from 'react'

const CareerCard = (props) => {
    const background = props.background|| "#FFFFFF";
  return (
    <div className={`rounded-[20px]  p-[12px] gap-[20px] flex flex-col justify-center items-center`} style={{backgroundColor: background}}>
                  <div className='w-[315px] gap-[12px] flex flex-col justify-center' >
                      <img src={props.pic} height="217px" width="315px" className='rounded-[12px]'/>
                      <p style={{ color: "#020617", fontFamily: "'Gilroy', sans-serif", fontWeight:"700" }} className='text-[20px] leading-[28px] font-bold'>{props.heading}</p>
                  </div>
                  <div className={`w-full py-[12px] px-[28px] rounded-[12px] flex justify-center items-center`} style={{backgroundColor: props.subColor}}>
                      <p style={{fontFamily: "'Poppins', sans-serif", fontWeight:"500"}} className='text-[#FFFFFF] text-[16px] leading-[24px] tracking-[2%]'>{props.subHeading}</p>
                  </div>
    </div>
  )
}

export default CareerCard