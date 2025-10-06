import React, { Component } from 'react'
import ReviewsCarts from '../repetitiveComponents/ReviewsCarts'

export default class Reviews extends Component {
   render() {
      return (
         <div className='mt-24'>
            <div className='flex justify-between'>
               <h1 className='text-[#232321]  text-[4rem] font-semibold font-rubik leading-normal p '>Reviews</h1>

               <button className="rounded-md mt-5 bg-[#005F73] hover:bg-black h-12 px-8 py-2 flex justify-center items-center gap-1 text-white font-rubik text-sm leading-normal tracking-[0.01563rem] uppercase transition-all duration-300">
                  See all
               </button>
            </div>
            <div className='carts'>
               <ReviewsCarts />
            </div>
         </div>
      )
   }
}
