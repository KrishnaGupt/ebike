"use client";

import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ProductFeature from "@/components/ProductFeatures";
import Testimonial from "@/components/ProductTestimonial";
import Email from "@/components/Email";
import ProductServices from "@/components/ProductServices";

export default function Product() {
  const [product, setproduct] = useState([]);
  const path = usePathname();
  const id = path.split("/")[3];

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(db, "content", id);
      const docSnap = await getDoc(docRef);
      setproduct(docSnap.data());
    };
    getData();
  });
  return (
    <section className="body-font overflow-hidden bg-white">
      <div className="container px-5 pt-16 pb-24 sm:pt-24 mx-auto">
        <div className="lg:w-[95%] mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-[45%] mr-0 sm:mr-[75px] transition-all hover:scale-150 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product.image}/>
          <div className="lg:w-[45%] w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-black tracking-widest">
              {product.tag}
            </h2>
            <h1 className="text-black text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <div className="flex">
              <span className="flex items-center">
                <span>
                  <Image src="/rating.webp" width={100} height={10} />
                </span>
                <span className="ml-3">
                  ({product.rating}) {product.reviews} Reviews{" "}
                </span>
              </span>
              <span className="flex ml-3 pl-3 py-1 border-l-2 border-gray-800 text-gray-500 space-x-2">
                <a>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="title-font font-medium text-2xl my-4 text-black">
              Price <span className="text-red-600">{product.price}</span>
            </p>
            <p className="leading-relaxed">{product.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-4 border-gray-800 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-800 ml-1 bg-gray-700 rounded-full w-6 h-6 
                focus:outline-none"></button>
                <button className="border-2 border-gray-800 ml-1 bg-indigo-500 rounded-full w-6 h-6 
                focus:outline-none"></button>
              </div>
            </div>
            <div className="flex">
              <div className="flex my-3">
                <div>
                  <button className="mr-3 bg-yellow-500 text-lg font-semibold px-8 py-2 rounded-3xl
                   hover:bg-yellow-700 transition-all">
                    Add to Cart
                  </button>
                </div>
                <div>
                  <button className="mr-3 bg-orange-700 text-lg font-semibold px-8 py-2 rounded-3xl
                   hover:bg-orange-900 transition-all">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductFeature/>
      <ProductServices/>
      <div>
        <Testimonial/>
      </div>
      <div>
        <Email/>
      </div>
    </section>
  );
}
