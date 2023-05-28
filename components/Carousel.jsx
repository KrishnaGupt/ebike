"use client";

import Image from "next/image";

export default function Carousel() {
    return (
        <div className="body bg-[#121212]">
            <div className="text-white w-full text-center absolute top-[130px] sm:top-[100px]">
                <div className="m-auto">
                    <h1 className="text-5xl sm:text-[64px]">Upto $500 Off Electric Bikes</h1>
                </div>
                <div className="m-auto">
                    <p className="w-[80%] sm:text-lg m-auto sm:w-[50%] my-8">Take advantage of the best deals of the season with $700 off a RadRover 6 Plus HS, and limited time offers on cargo and commuter models. Only while supplies last.</p>
                </div>
            </div>
            <input type="radio" name="position" defaultChecked />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <input type="radio" name="position" />
            <div id="carousel">
                <div className="item w-[80%] sm:w-[400px] h-[300px] sm:h-[400px]">
                    <Image src='/RadRunner2.webp' className="absolute -top-24"
                        fill={true} alt="image"/>
                </div>
                <div className="item w-[80%] sm:w-[400px] h-[300px] sm:h-[400px]">
                    <Image src='/Rover6ST.webp' className="absolute -top-24" fill={true} alt="image"/>
                </div>
                <div className="item w-[80%] sm:w-[400px] h-[300px] sm:h-[400px]">
                    <Image src='/RunnerPlus.webp' className="absolute top-0" width={600} height={400} alt="image"/>
                </div>
                <div className="item w-[80%] sm:w-[400px] h-[300px] sm:h-[400px]">
                    <Image src='/WagonOrange.webp' className="absolute top-0" width={600} height={400} alt="image"/>
                </div>
                <div className="item w-[80%] sm:w-[400px] h-[300px] sm:h-[400px]">
                    <Image src='/RadRunner2.webp' className="absolute top-0" width={600} height={400} alt="image"/>
                </div>
            </div>
        </div>

    )
}