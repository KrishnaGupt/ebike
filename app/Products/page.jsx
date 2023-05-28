"use client";

import { useContext, useEffect } from "react";
import { AppDataContext } from "../context/Appdata";
import Product from "@/components/Product";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";
import Services from "@/components/Services";
import Email from "@/components/Email";

export default function Products() {
  const { data, setData } = useContext(AppDataContext);
  useEffect(() => {
    const getData = async()=>{
        const querySnapshot = await getDocs(collection(db, "content"));
        setData(querySnapshot.docs.map((doc)=> ({...doc.data(), id: doc.id})))
    }
    getData()
}, [])
  return (
    <section>
      <div className="mt-12 mb-8 w-full">
        <h1 className="text-6xl text-center font-semibold">Electic EBikes</h1>
      </div>
      <div>
        <div className="body-font">
          <div className="container px-5 mx-auto bg-white">
            <div className="flex flex-wrap">
              {data &&
                data.map((doc, index) => (
                  <Product
                    key={index}
                    image={doc.image}
                    title={doc.title}
                    tag={doc.tag}
                    id={doc.id}
                    price={doc.price}
                    rating={doc.rating}
                    reviews={doc.reviews}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="my-8">
        <Services/>
      </div>
      <div className="my-8">
        <Email/>
      </div>
    </section>
  );
}
