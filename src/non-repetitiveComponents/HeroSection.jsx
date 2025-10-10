import React, { Component } from 'react'

export default class HeroSection extends Component {
   render() {
      return (
         <div>
            <h1 className="text-[3rem]  lg:text-[9rem] xl:text-[12rem] 2xl:text-[15rem]  text-center leading-none font-bold uppercase text-[#232321] font-rubik">
               Do it 
               <span className="text-[#005F73] font-rubik">right</span>
            </h1>


            <div className="relative w-full">

               <img className="w-full" src="\Images\Hero-image.svg" alt="" />


               <h1 className="absolute 2xl:top-[60%] xl:top-[60%] lg:top-[55%] left-[5%]  
                 text-white font-rubik 2xl:text-[4rem] xl:text-[3.5rem] lg:text-[3rem] font-semibold leading-normal">
                  NIKE AIR MAX
               </h1>
               <p className='absolute 2xl:top-[70%]  xl:top-[71%] lg:top-[68%]  left-[5%]  text-white font-open-sans 2xl:text-[1.5rem] xl:text-[1.2rem] lg:text-[1.1rem] font-normal leading-normal'>Nike introducing the new air max for <span className='absolute 2xl:top-[75%]    xl:top-[76%]  lg:top-[100%]  left-[0%] '> everyone's comfort</span></p>

               <button className="absolute top-[80%] left-[5%] rounded-md bg-[#005F73] hover:bg-black h-12 px-8 py-2 flex justify-center items-center gap-1 text-white font-rubik text-sm  leading-normal tracking-[0.01563rem] uppercase transition-all duration-300">
                  Shop now
               </button>



               <img className='absolute 2xl:top-[55%] xl:top-[45%] lg:top-[40%] lg:w-[15%] xl:w-auto 2xl:w-auto 2xl:left-[84%] xl:left-[84%] lg:left-[82%] ' src="\Images\HeroSide1.svg" alt="" />
               <img className='absolute 2xl:top-[75%] xl:top-[71%] lg:top-[68%] lg:w-[15%]   xl:w-auto 2xl:w-auto 2xl:left-[84%] xl:left-[84%] lg:left-[82%] ' src="\Images\HeroSide2.svg" alt="" />


            </div>



         </div>
      )
   }
}
