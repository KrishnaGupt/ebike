"use client";

import { useContext, useEffect, } from "react";
import Product from "./Product";
import { db } from "@/firebase";
import { AppDataContext } from "@/app/context/Appdata";
import { collection, getDocs } from "firebase/firestore";

export default function Products() {
  const { data, setData } = useContext(AppDataContext);
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "content"));
      setData(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);
  return (
    <div>
      <div className="w-full">
        <h1 className="text-3xl mx-3 sm:mx-0 sm:text-6xl text-center my-8 font-semibold">
          A healthy ride for everyone
        </h1>
      </div>
      <div className="w-full justify-center flex flex-wrap bg-white">
        {data &&
          data.map((doc, index) => (
            <Product
              key={index}
              id={doc.id}
              image={doc.image}
              title={doc.title}
              tag={doc.tag}
              price={doc.price}
              rating={doc.rating}
              reviews={doc.reviews}
            />
          ))}
      </div>
    </div>
  );
}
