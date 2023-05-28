"use client";

import { BiShield } from "react-icons/bi";
import { BsHeadphones } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";

export default function ProductServices() {
  return (
    <section>
      <div>
        <div>
          <h1 className="text-[40px] sm:text-6xl mb-8 mt-12 text-center font-semibold">With the bike, you also get</h1>
        </div>
        <div className="flex flex-wrap justify-center my-16">
            <div className="h-full w-[300px] mx-12 my-4 sm:my-0 text-center flex flex-col justify-center">
              <div className="w-full">
                <FaShippingFast className="text-4xl mx-auto my-4"/>
              </div>
              <p className="font-semibold text-2xl my-4">Free and Fast Shipping</p>
              <p className="leading-relaxed text-xl text-[#595959]">
              Wait less, ride more. Enjoy fast, free shipping on all ebike orders.
              </p>
              <p className="text-black cursor-pointer my-3">Learn More</p>
            </div>

            <div className="h-full w-[300px] mx-12 my-4 sm:my-0 text-center flex flex-col justify-center">
              <div className="w-full">
                <BiShield className="text-4xl mx-auto my-4"/>
              </div>
              <p className="font-semibold text-2xl my-4">1 year warranty</p>
              <p className="leading-relaxed text-xl text-[#595959]">
              Ride in confidence. We’ve got you covered.
              </p>
              <p className="text-black cursor-pointer my-3">Learn More</p>
            </div>

            <div className="h-full w-[300px] mx-12 my-4 sm:my-0 text-center flex flex-col justify-center">
              <div className="w-full">
                <BsHeadphones className="text-4xl mx-auto my-4"/>
              </div>
              <p className="font-semibold text-2xl my-4">Ask our experts</p>
              <p className="leading-relaxed text-xl text-[#595959]">
              Can’t choose a bike? Need to fix a flat? We’re here to help.
              </p>
              <p className="text-black cursor-pointer my-3">Learn More</p>
            </div>
        </div>
      </div>
    </section>
  );
}
