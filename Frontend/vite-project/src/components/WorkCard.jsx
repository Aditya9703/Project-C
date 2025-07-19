import React from 'react'

function WorkCard(props) {
  return (
    <div className='flex flex-col rounded-[20px] p-[20px] gap-[20px] bg-[#3A3C43]'>
            <div className='bg-green-50 rounded-[6px] py-1 px-5 w-fit'>
                    <p className='w-10 h-5 text-[14px]/[20px] text-green-600 text-center' style={{fontFamily:"'Gilroy-Medium', sans-serif"}}>{props.step}</p>

            </div>
            <div className='flex flex-col gap-[20px]'>
                <img src={props.image} alt="" className='w-[270px] h-[172px]'/>
                <p className='w-[270px] h-[20px] text-[16px]/[20px] text-neutral-50 text-center'>{props.para}</p>
            </div>

    </div>
  )
}

export default WorkCard