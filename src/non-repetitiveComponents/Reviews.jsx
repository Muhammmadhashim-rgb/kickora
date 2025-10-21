import React, { Component } from 'react'
import ReviewsCarts from '../repetitiveComponents/ReviewsCarts'

export default class Reviews extends Component {
   render() {
      return (
         <div className='mt-24'>
            <div className='flex  justify-between items-center'>
               <h1 className='text-[#232321]  2xl:text-[4rem] xl:text-[3.5rem] lg:text-[3rem] font-semibold font-rubik leading-normal p '>Reviews</h1>

               <button className="rounded-md  bg-[#005F73] hover:bg-black h-12 px-8 py-2 flex justify-center items-center gap-1 text-white font-rubik text-sm leading-normal tracking-[0.01563rem] uppercase transition-all duration-300">
                  See all
               </button>
            </div>
            <div className='carts flex gap-[72px]'>
               <ReviewsCarts h1="Good Quality" para="I highly recommend shopping from kicks" reviewProflieImage="/Images/reviewCart1.svg" data="5.0" reviewImage="/Images/Reviews1.png" />
               <ReviewsCarts h1="Good Quality" para="I highly recommend shopping from kicks" reviewProflieImage="/Images/reviewCart1.svg" data="3.0" reviewImage="/Images/Reviews2.png" />
               <ReviewsCarts h1="Good Quality" para="I highly recommend shopping from kicks" reviewProflieImage="/Images/reviewCart1.svg" data="8.0" reviewImage="/Images/Reviews3.png" />
            </div>
         </div>
      )
   }
}
