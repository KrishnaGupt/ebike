"use client"

import Image from "next/image"
import Link from "next/link"

export default function Product(props){
    return(
        <div className="w-[360px] mx-5">
            <Link href={`/Products/Product/${props.id}`}>
                <div className="w-full">
                <Image className="productImg cursor-pointer hover:bg-[#a2a2a2a3] transition-all" src={props.image} fill={true} alt="product"/>
                </div>
            </Link>
            <div>
                <div>
                    <p className="text-2xl my-3 font-semibold cursor-pointer">{props.title}</p>
                </div>
                <div>
                    <p className="text-sm text-[#595959]">{props.tag}</p>
                </div>
                <div className="flex my-2">
                <span><Image src="/rating.webp" width={100} height={10}/></span>
                <span> ({props.rating})</span>
                <span className="text-[#595959] mx-2">{props.reviews} Reviews</span>
                </div>
                    <div className="font-semibold text-xl my-3">
                       <span>Price </span> <span className="text-red-700">{props.price}</span> 
                    </div>
            </div>
        </div>
    )
}