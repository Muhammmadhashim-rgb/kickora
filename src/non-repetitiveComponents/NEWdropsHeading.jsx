import React, { Component } from 'react'
import ShoesCard from '../repetitiveComponents/ShoesCard'

export default class NEWdropsHeading extends Component {
  render() {
    return (
      <div className=''>
        <div className="flex justify-between  items-center md:mt-[3rem] 2xl:mt-24 xl:mt-24 lg:mt-24">
          <h1 className="leading-[55px] 2xl:text-[4rem] xl:text-[3.5rem] lg:text-[3rem]  md:text-[2rem] font-semibold uppercase text-[#232321] font-rubik">
            Don’t miss out
            <span className="mt-0 leading-normal block"> new drops</span>
          </h1>

          <button className="rounded-md  bg-[#005F73] hover:bg-black  md:px-[1.2rem] md:py-[0.8rem]  2xl:px-8 2xl:py-4 xl:px-8 xl:py-4 lg:px-8 lg:py-4 2xl:text-[1rem] xl:text-[1rem] lg:text-[1rem]  md:text-[0.8rem] flex justify-center items-center gap-1 text-white font-rubik text-sm leading-normal tracking-[0.01563rem] uppercase transition-all duration-300">
            Shop New Drops
          </button>
        </div>

        <div className=' mt-9 flex-wrap justify-center card flex gap-5'>
          <div className='md:w-[48%] lg:w-[23%]'>
          <ShoesCard cardImage='/Images/shoes1.png' cardHeading1="ADIDAS 4DFWD X PARLEY" cardHeading2="RUNNING SHOES" cardPrize='$35' />
          </div>
          <div className='md:w-[48%] lg:w-[23%]'>
          <ShoesCard cardImage='/Images/shoes2.png' cardHeading1="ADIDAS 4DFWD X PARLEY" cardHeading2="RUNNING SHOES" cardPrize='$25' />
          </div>
          <div className='md:w-[48%] lg:w-[23%]'>
          <ShoesCard cardImage='/Images/shoes3.png' cardHeading1="ADIDAS 4DFWD X PARLEY" cardHeading2="RUNNING SHOES" cardPrize='$21' />
          </div>
          <div className='md:w-[48%] lg:w-[23%]'>
          <ShoesCard cardImage='/Images/shoes4.png' cardHeading1="ADIDAS 4DFWD X PARLEY" cardHeading2="RUNNING SHOES" cardPrize='$95' />
          </div>
        </div>
      </div>
    )
  }
}
