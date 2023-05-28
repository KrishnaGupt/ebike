"use client";

import Image from "next/image";

export default function Stats() {
  return (
    <div className="w-full my-14">
      <div className="w-[90%] flex m-auto h-[400px] relative py-12">
        <Image
          src="/riders.jpg"
          className="rounded-[30px] brightness-[0.3]"
          fill={true}
          alt="riders"
        />
        <div className="flex flex-col w-full">
          <span className="block text-center relative z-[9999] font-semibold w-[90%] sm:w-[48%] m-auto text-3xl sm:text-4xl text-white">
            Over <span className="text-green-400">100,000+</span> riders have
            choosen their rides.
            <br /> Making environment eco-friendly with Unicus.
          </span>
          <div className="w-full text-center my-6">
            <button
              className="relative text-xl text-black bg-green-400 hover:bg-green-500 transition-all 
            font-semibold px-8 py-2 rounded-3xl">
              Meet our riders
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
