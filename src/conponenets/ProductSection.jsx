import React from 'react'
import ProductCard from './ProductCard';
import Cap1 from "../assets/Cap1.png";
import Cap2 from "../assets/Cap2.png"
import Cap3 from "../assets/cap3.png"

const ProductSection = () => {
  return (
    <>
     <section className="bg-[#f9f9f9] flex flex-col justify-center items-center gap-24 text lg:px-20 px-5 py-14 min-h-screen">
        <div> 
            <h1 className="lg:text-4xl text-2xl font-bold">Popular Product</h1>
        </div>

        <div className="flex lg:flex-row flex-col gap-8">
         <ProductCard
           Gees={Cap1}
           Text="Cup Coke Direct "
           Author="By The Author"
           Price="$17.000"
          />

         <ProductCard
           Gees={Cap2}
           Text="Broken Silence"
           Author="By Author Ann"
           Price="$287.00"
          />

         <ProductCard
           Gees={Cap3}
           Text="A Thousand Seed"
           Author="By Stella Hopes"
           Price="$20.30"
          />
        </div>
      </section>
    </>
  );
}

export default ProductSection