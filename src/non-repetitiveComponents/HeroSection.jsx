import React, { Component } from 'react'

export default class HeroSection extends Component {
   render() {
      return (
         <div>
            <h1 className="text-[3rem] sm:text-[2rem] lg:text-[5rem] xl:text-[13rem] 2xl:text-[16rem] text-center leading-none font-bold uppercase text-[#232321] font-rubik">
               Do it
               <span className="text-[#005F73] font-rubik">right</span>
            </h1>


            <div className="relative w-full">

               <img className="w-full" src="\Images\Hero-image.svg" alt="" />


               <h1 className="absolute top-[60%] left-[5%]  
                 text-white font-rubik text-[4rem] font-semibold leading-normal">
                  NIKE AIR MAX
               </h1>
               <p className='absolute top-[70%] left-[5%]  text-white font-open-sans text-[1.5rem] font-normal leading-normal'>Nike introducing the new air max for <span className='absolute top-[75%] left-[0%] '> everyone's comfort</span></p>

               <button className="absolute top-[80%] left-[5%] rounded-md bg-[#005F73] hover:bg-black h-12 px-8 py-2 flex justify-center items-center gap-1 text-white font-rubik text-sm  leading-normal tracking-[0.01563rem] uppercase transition-all duration-300">
                  Shop now
               </button>



               <img className='absolute top-[55%] left-[84%] ' src="\Images\HeroSide1.svg" alt="" />
               <img className='absolute top-[75%] left-[84%] ' src="\Images\HeroSide2.svg" alt="" />


            </div>



         </div>
      )
   }
}
