import React from 'react'
import { useState } from 'react';


function FAQ() {

    const data = 
       [
  {
    question: "What is 'Code Every Day with Vivek'?",
    answer:
      "A program designed to help you build a consistent coding habit and improve your skills through daily practice and community support.",
  },
  {
    question: "Who is this program for?",
    answer:
      "It's for everyone who wants to sharpen their coding and problem-solving skills—beginners, students, job seekers, and working professionals.",
  },
  {
    question: "Do I need prior coding experience?",
    answer:
      "Basic coding and problem-solving skills are encouraged although this program adapts to all levels. Whether you're starting from scratch or looking to sharpen your skills.",
  },
  {
    question: "Which programming languages will be used?",
    answer:
      "The sessions will be technically agnostic.",
  },
  {
    question: "How does this work?",
    answer:
      [
        "Step 1- Sign up and join the community group",
"Step 2- Attend live sessions on zoom.",
"Step 3- Get access to exclusive content and solve coding problems",
"Step 4- Earn Karma Points by inviting friends",
"Step 5- Unlock career accelerators like mentorship, mock interviews, and free courses"
      ]
  },
  {
    question: "Where do I watch the live sessions?",
    answer:
      "You shall be coding with Vivek on Zoom! The link will be shared in the community group.",
  },
  {
    question: "How do I join the community?",
    answer: "Once you register, you’ll receive an invite link to our private whatsapp group where discussions, solutions, and updates are shared."
  },
  {
    question: "How do I invite people?",
    answer:
      "When you log in you will be able to see your unique invite link. Just share it. Once your friend successfully signs up using this link, you earn points!",
  },
   {
    question: "How do I invite people?",
    answer:
      "You can share the program link directly with your friends. We often have referral bonuses, so check the main page for details!",
  },
   {
    question: "How do I earn Karma Points?",
    answer: [
        "You earn Karma Points by referring or inviting friends!",
        "1 invite = 10 Karma Points",
        "Refer 3 friends in a day = 2X Karma Points (20 per referral)",
        "Refer 5 friends in a day = 3X Karma Points (30 per referral)"


    ]
  },
   {
    question: "How do I invite people?",
    answer:
      "You can share the program link directly with your friends. We often have referral bonuses, so check the main page for details!",
  },
   {
    question: "How do I invite people?",
    answer:
      "You can share the program link directly with your friends. We often have referral bonuses, so check the main page for details!",
  },


    ];



    const [openIndex, setOpenIndex] = useState(1);

  const toggle = (index) => {
    // If the clicked item is already open, close it. Otherwise, open the new one.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='w-full px-[64px] py-[100px] gap-[10px] bg-[#14171F]'>

        <div className='w-full bg-[#292C33] rounded-[40px] px-[64px] py-[20px] flex flex-col gap-[40px] items-center justify-center'>

            <div className='flex flex-col gap-[40px] justify-center items-center'>
                <h1 className='w-[668px] h-[64px] text-[#F8FAFC] font-bold text-[48px] leading-[64px] tracking-[4%] text-center' style={{fontFamily:"'Gilroy', sans-serif", fontWeight:510}}>Frequently Asked Questions</h1>

                <div className='flex flex-col gap-[20px] h-[660px] overflow-y-auto custom-scrollbar pr-6'>
                    {/* box */}

                    {
                        data.map((item,idx)=>(
                                <div className='flex flex-col gap-[20px] cursor-pointer ' key={idx} onClick={()=>toggle(idx)}>

                                    <div className='flex flex-col gap-[20px]'>
                                        <div className='w-[852px] gap-[20px] flex justify-between items-center'>

                                            <h2 className='w-auto h-auto text-[#F8FAFC] text-[20px] leading-[28px]' style={{fontFamily:"'Gilroy', sans-serif", fontWeight:400}}>
                                                {item.question}
                                            </h2>

                                            <div className={`h-[24px] w-[24px] flex justify-center items-center transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                                                    <img src='/images/Stroke1.png' />
                                            </div>
                                        </div>

                                        <div style={{
                                             overflow: "hidden",
                                            transition: "max-height 0.2s ease-in-out",
                                             maxHeight: openIndex === idx ? '200px' : '0px'
                                         }}
                                            >
                                            {Array.isArray(item.answer) ? (

      // If it's an array, render a <ul>
                                                    <ul className="list-disc">
                                                        {item.answer.map((line) => (
                                                        <p className='w-[772px] h-auto text-[16px] leading-[24px] text-[#E2E8F0]' style={{fontFamily:"'Gilroy',sans-serif", fontWeight:400}}>{line}</p>
                                                        ))}
                                                    </ul>

                                                    ) : (

                                                    // Otherwise, just render the string in a <p> tag
                                                    <p className='w-[772px] h-auto text-[16px] leading-[24px] text-[#E2E8F0]' style={{fontFamily:"'Gilroy',sans-serif", fontWeight:400}}>{item.answer}</p>
                                                    
                                                    )}
                                            </div>

                                        
                                    </div>

                                    <div className='w-[852px] h-[0px] border border-[#64748B] '></div>
                                </div>
                        ))
                    }


                      

                </div>
            </div>        

        </div>

    </div>
  )
}

export default FAQ