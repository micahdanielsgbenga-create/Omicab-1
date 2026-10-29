import React from 'react'
import CapBall from "../assets/CapBall.png"
const Hero = () => {
  return (
    <main className="min-h-screen py-10 flex flex-col lg:flex-row items-center justify-center lg:gap-3 lg:px-20 gap-5 px-5">
        {/* left  */}
        <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="lg:text-6xl text-2xl font-bold text-red-600">Welcome to our website</h1>

            <p className="text-center text-sm">Building a reliable reading culture helps you to grow in knowledge,
               acquired information will bring you into a life fullfillment 
            </p>

            <div className="flex gap-5 lg:flex-row items-center justify-center flex-col">
              <div>
                <button className="bg-blue-600 text-white py-1 px-2 rounded-md">My Cart</button>
              </div>

              <div>
                <button className="bg-black text-white py-1 px-2 rounded-md">Buy More</button>
              </div>
            </div>
        </div>


        {/* right  */}
        <div className="w-full">
            <div className="w-full">
                <img src={CapBall} alt="" className="w-full" />
            </div>
        </div>

    </main>
  );
}

export default Hero