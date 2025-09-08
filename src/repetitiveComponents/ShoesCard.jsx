import React, { Component } from 'react'

function shoesCard(props) {

   return (
      <div className=''>
         <div>
            <img  className='w-[23rem]' src={props.cardImage} alt="" />

            <h1 className=  '  mt-3 text-[#232321] font-rubik text-[1.7rem] not-italic font-semibold leading-normal'> {props.cardHeading1} <span className='block'>{props.cardHeading2}</span></h1>
            </div>

             <button className=" mt-3 rounded-md mb-5 bg-[#232321] hover:bg-[#005F73] h-12 px-24 py-2 flex justify-center items-center gap-1 text-white font-rubik text-sm leading-normal tracking-[0.01563rem] uppercase transition-all duration-300">
            View Product - <span className='text-[#FFA52F]'>{props.cardPrize}</span>
          </button>
      </div>
      
   )

} 


export default shoesCard 