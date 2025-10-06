import React, { Component } from 'react'

export default class Categories extends Component {
   render() {
      return (
         <div>
            <div className=' mt-24 w-full h-[54.1rem] bg-[#232321]'>

               <div className='flex justify-between'>
                  <h1 className='text-white pt-16 ps-44 text-[4rem] font-semibold font-rubik leading-normal p '>Categories</h1>

                  <div className='flex gap-6 mt-20 me-44'>
                     <button className="rounded-[0.5rem] cursor-pointer bg-[#858582]  h-12 px-3 py-8 flex justify-center items-center gap-1 text-black font-rubik text-sm leading-normal tracking-[0.01563rem] uppercase transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M14.03 7.47a.75.75 0 0 1 0 1.06L10.56 12l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0" clipRule="evenodd" /></svg>
                     </button>

                     <button className="rounded-[0.5rem] cursor-pointer  bg-[#E7E7E3]  h-12 px-3 py-8 flex justify-center items-center gap-1 text-black font-rubik text-sm leading-normal tracking-[0.01563rem] uppercase transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M9.97 7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L13.44 12L9.97 8.53a.75.75 0 0 1 0-1.06" clipRule="evenodd" /></svg>
                     </button>


                  </div>


               </div>

               <div className='flex'>

                  <div className='2xl:w-full xl:w-[35rem] xl:h-[41rem] ms-44 h-[40rem] mt-[3.2rem] rounded-tl-[64px]  bg-[#ECEEF0]'>

                     <div className="2xl:w-[45rem] xl:w-[27rem] xl:h-60 2xl:h-64 mt-48 2xl:ms-48 xl:ms-28 overflow-hidden">

                        <img
                           className="2xl:w-[80%] lg:w-[80%] 2xl:h-full object-cover  object-center"
                           src="/Images/CategoriesiImage1.png"
                           alt="Category Image"
                        />

                     </div>

                     <div className='flex justify-between mt-6'>
                        <h1 className=' ps-16 pt-12  text-[#232321] font-rubik text-[2.25rem]  font-semibold leading-normal uppercase'>Lifestyle <span className='block leading-[35px]'>Shoes</span></h1>

                        <button className="rounded-[0.5rem] mb-5 mt-[4.7rem] me-16 bg-[#232321] hover:bg-[#005F73] h-12 px-7 py-8 flex justify-center items-center gap-1 text-white font-rubik text-sm leading-normal tracking-[0.01563rem] uppercase transition-all duration-300">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M2.16681 1.10565H14.8947V13.8336M14.0108 1.98954L1.10615 14.8942" stroke="#E7E7E3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                           </svg>
                        </button>

                     </div>

                  </div>
                  <div className='2xl:w-full  xl:w-[35rem] xl:h-[41rem] h-[40rem] mt-[3.2rem]   bg-[#F6F6F6]'>


                     <div className="2xl:w-[38rem] xl:w-[27rem] xl:h-60 2xl:h-64 mt-48 2xl:ms-48 xl:ms-28">
                        <img
                           className="2xl:w-[80%] lg:w-[80%] 2xl:h-full object-cover  object-center"
                           src="/Images/CategoriesiImage2.png"
                           alt="Category Image"
                        />
                     </div>

                     <div className='flex justify-between mt-6'>
                        <h1 className=' ps-16 pt-12  text-[#232321] font-rubik text-[2.25rem]  font-semibold leading-normal uppercase'>Basketball <span className='block leading-[35px]'>Shoes</span></h1>

                        <button className="rounded-[0.5rem] mb-5 mt-[4.7rem] me-16 bg-[#232321] hover:bg-[#005F73] h-12 px-7 py-8 flex justify-center items-center gap-1 text-white font-rubik text-sm leading-normal tracking-[0.01563rem] uppercase transition-all duration-300">
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M2.16681 1.10565H14.8947V13.8336M14.0108 1.98954L1.10615 14.8942" stroke="#E7E7E3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                           </svg>
                        </button>

                     </div>


                  </div>
               </div>
            </div>
         </div>
      )
   }
}
