import React from 'react'

const ProductCard = ({Gees, Text, Author, Price}) => {
  return (
    <div className="bg-white text-black p-6 flex gap-8 flex-col items-center">
        {/* Top Div */}
        <div>
            <img src={Gees} alt="" />
        </div>

        {/* Bottom Div */}
        <div className="text-center flex gap-2 flex-col">
            <h1>
              {Text}
            </h1>

            <p>
              {Author}
            </p>

            <p>
              {Price}
            </p>

            <div>
                <button className="bg-blue-800 text-white py-1 px-3 rounded-md">Buy Now</button>
            </div>
        </div>
    </div>
  );
}

export default ProductCard