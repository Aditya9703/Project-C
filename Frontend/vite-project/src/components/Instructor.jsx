import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Instructor = () => {
  return (
    <div className="bg-[#292C33] py-[60px] px-[160px]  flex gap-[40px] w-full flex-col items-center">
      <div className="w-fill flex items-end flex-col">
          <h1 className="w-fill h-[64px] text-[48px]/[64px] tracking-[4%]  text-neutral-50" style={{fontFamily:"'Gilroy', sans-serif"}}>
                Learn with Industry Experienced Instructor
          </h1>
          <div className="w-[749px] h-[4px] bg-[#FCD34D] ">

          </div>
      </div>

     

      <div className="w-full gap-[40px] flex">

        <div className="bg-yellow-50 h-[241px] w-[241px] rounded-[50%] relative overflow-clip">

          <img src="/images/viveksir.png" alt=""  className=" absolute top-[23px] left-[25px] h-[234px] w-[190px]" />
        </div>

        <div className="w-[839px] flex flex-col gap-[20px]">
            <p className="w-full text-[#FFFFFF] text-[20px]/[28px]" style={{fontFamily:"'Gilroy-Regular', sans-serif"}}>
                Vivek has taught <span className="text-yellow-300"  style={{fontFamily:"'Gilroy', sans-serif"}}>20,000+ students </span>  
                through on campus workshops and online courses on interview 
                preparation. After graduating from <span className="text-yellow-300"  style={{fontFamily:"'Gilroy', sans-serif"}}>IIT</span>,
                 he worked at <span className="text-yellow-300"  
                style={{fontFamily:"'Gilroy-bold', sans-serif"}}>Amazon</span> for three years, handling high-scale
                 systems He is loved by his students
                 for his lucid in-depth explanations and ability to make people think through problems.
            </p >
            <div className="flex flex-col rounded-[8px] px-[12px] py-[8px] bg-neutral-500 gap-[4px] w-fit text-[#FFFFFF]">
                <h2 className="text-[#FFFFFF] text-[20px]/[28px] w-[171px] h-[28px]" style={{fontFamily:"'Gilroy', sans-serif"}}>Vivekanand Vivek</h2>
                <div className="flex gap-[12px]">
                    <div className="flex gap-[12px] items-center">
                      <h2 className="w-[70px] h-[28px] text-[20px]/[28px]  " style={{fontFamily:"'Gilroy', sans-serif"}}>Ex-SDE</h2>
                      <div className="flex items-end">
                          <img src="/images/amazon.png" alt="amzon_logo" className="w-[66px] h-[20px]" />
                          <h2 className="w-[4px] h-[28px] text-[20px]/[28px] " style={{fontFamily:"'Gilroy', sans-serif"}}>,</h2>

                      </div>

                    </div>
                   <h2 className="w-[139px] h-[28px] text-[20px]/[28px]  " style={{fontFamily:"'Gilroy', sans-serif"}}>IIT BHU Alumni</h2>

                </div>
                
                <div className="w-6 h-6 bg-amber-50 flex justify-center items-center">

                                <FontAwesomeIcon
                        icon={faLinkedin}
                        className="w-6 h-6 text-[#0076B2] block leading-none"
                      />


                </div>
      
            </div>
        </div>

      </div>
    
      

     
     
    </div>
  );
};

export default Instructor;
