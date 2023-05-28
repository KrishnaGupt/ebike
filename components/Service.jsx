"use client"

import Image from "next/image"

export default function Service(props){
    return(
        <div className="w-[300px]">
                    <div className="w-full h-[460px] relative">
                        <Image src={props.img} className="rounded-2xl" fill={true} alt="service"/>
                    </div>
                    <div>
                        <div>
                            <h2 className="my-4 text-xl font-semibold">{props.name}</h2>
                        </div>
                        <div className="text-[#595959]">
                            <p>{props.content}</p>
                        </div>
                        <div>
                            <button className="transition-all hover:bg-green-500 py-2 px-6 rounded-2xl font-semibold my-4">{props.cta}</button>
                        </div>
                    </div>
                </div>
    )
}