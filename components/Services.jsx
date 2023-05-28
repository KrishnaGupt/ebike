"use client"

import Service from "./Service"
import { services } from "@/app/service"

export default function Services(){
    return(
        <div className="w-full flex justify-center flex-col text-center">
            <div>
                <h1 className="text-3xl sm:text-5xl font-semibold">Customer Support & Services</h1>
            </div>
            <div>
                <p className="text-lg sm:text-2xl my-3 px-3 sm:px-0">We provide best in class services for a seamless customer experience.</p>
            </div>
            <div className="my-6 flex flex-wrap justify-around">
                {
                    services && services.map((support, index) => <Service key={index} name={support.name} img={support.image} content={support.content} cta={support.cta}/>)
                }
                
            </div>

        </div>
    )
}