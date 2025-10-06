import React, { Component } from 'react'
import ShoesCard from '../repetitiveComponents/ShoesCard'

export default class NEWdropsHeading extends Component {
  render() {
    return (
      <div className=''>
        <div className="flex justify-between items-end mt-24">
          <h1 className="leading-[55px] text-[4rem] font-semibold uppercase text-[#232321] font-rubik">
            Don’t miss out
            <span className="mt-0 leading-normal block"> new drops</span>
          </h1>

          <button className="rounded-md mb-5 bg-[#005F73] hover:bg-black h-12 px-8 py-2 flex justify-center items-center gap-1 text-white font-rubik text-sm leading-normal tracking-[0.01563rem] uppercase transition-all duration-300">
            Shop New Drops
          </button>
        </div>

        <div className=' mt-9 card flex gap-8'>
          <ShoesCard cardImage='/Images/shoes1.png' cardHeading1="ADIDAS 4DFWD X PARLEY" cardHeading2="RUNNING SHOES" cardPrize='$35' />
          <ShoesCard cardImage='/Images/shoes2.png' cardHeading1="ADIDAS 4DFWD X PARLEY" cardHeading2="RUNNING SHOES" cardPrize='$235' />
          <ShoesCard cardImage='/Images/shoes3.png' cardHeading1="ADIDAS 4DFWD X PARLEY" cardHeading2="RUNNING SHOES" cardPrize='$21' />
          <ShoesCard cardImage='/Images/shoes4.png' cardHeading1="ADIDAS 4DFWD X PARLEY" cardHeading2="RUNNING SHOES" cardPrize='$95' />
         
        </div>
      </div>
    )
  }
}
