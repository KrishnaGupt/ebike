"use client"

import { FaWeightHanging } from "react-icons/fa"
import { MdOutlineSpeed } from "react-icons/md"
import { TbEngine } from "react-icons/tb"
import { TiBatteryFull } from "react-icons/ti"

export default function ProductFeature(){
    return(
        <div className="flex w-[90%] m-auto flex-wrap justify-around">
      <div className="p-4 md:w-[25%] flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
          <MdOutlineSpeed className="text-5xl"/>
        </div>
      <div className="flex-grow">
          <h2 className="text-[#595959] text-lg title-font font-medium mb-2">What&apos;s the Top Speed</h2>
          <p className="leading-relaxed font-semibold text-black text-3xl">28MPH</p>
        </div>
        </div>

      <div className="p-4 md:w-[25%] flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
          <TiBatteryFull className="text-5xl"/>
        </div>
      <div className="flex-grow">
          <h2 className="text-[#595959] text-lg title-font font-medium mb-2">What&apos;s the range?</h2>
          <p className="leading-relaxed font-semibold text-black text-3xl">30 Miles</p>
        </div>
        </div>

      <div className="p-4 md:w-[25%] flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
          <FaWeightHanging className="text-5xl"/>
        </div>
      <div className="flex-grow">
          <h2 className="text-[#595959] text-lg title-font font-medium mb-2">How much can it carry?</h2>
          <p className="leading-relaxed font-semibold text-black text-3xl">350lb</p>
        </div>
        </div>
      <div className="p-4 md:w-[25%] flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
          <TbEngine className="text-5xl"/>
        </div>
      <div className="flex-grow">
          <h2 className="text-[#595959] text-lg title-font font-medium mb-2">How powerful is the motor?</h2>
          <p className="leading-relaxed font-semibold text-black text-3xl">750W</p>
        </div>
        </div>
      </div>
    )
}