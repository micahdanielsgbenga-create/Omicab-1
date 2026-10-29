import React from 'react'
import linedec from "../assets/linedec.png"
import Trainer1 from "../assets/Trainer1.png"
import Trainer2 from "../assets/Trainer2.png"
import Trainer3 from "../assets/Trainer3.png"

const Services = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="bg-white items-center text-center justify-items-center">
        <div className="py-20">
         <h1 className="text-2xl font-bold">
           <span className="text-black">EXPERT</span>{" "}           
           <span className="text-red-600">TRAINER</span></h1>
         <img src={linedec} alt="" className="px-48 py-5" />
         <p>Bringing you closer to our expert trainers and instructors.</p>
        </div>

        <div className="flex lg:flex-row flex-col gap-8">
          <div className="bg-white shadow-2xl">
            <img src={Trainer1} alt="Picture" className="p-8" />
            <div className="text-justify px-8">
             <h2 className="text-0 text-red-500 py-1">Strength Trainer</h2>
             <h1 className="text-xl font-bold py-1">Bret D. Bowers</h1>
             <p>Delivers high-energy trainings using <br />the latest techniques in exercise <br />science, cardio programs and <br />strength training.</p>
            </div>

            <div className="text-justify px-8">
              <p className="text-0 font-bold py-4 hover:text-red-600 transition-300">f x in Be</p>
            </div>
          </div>

          <div className="bg-white shadow-2xl">
            <img src={Trainer2} alt="Picture" className="p-8" />
            <div className="text-justify px-8">
             <h2 className="text-0 text-red-500 py-1">Muscle Trainer</h2>
             <h1 className="text-xl font-bold py-1">Hector T. Daigle</h1>
             <p>Ensures effective workouts, identifying <br />different muscle groups and <br />explaining appropriate methods to <br />strengthen specific muscles.</p>
            </div>

            <div className="text-justify px-8">
             <p className="text-0 font-bold py-4 hover:text-red-600 transition-300">f x in Be</p>
            </div>
          </div>

         <div className="bg-white shadow-2xl">
           <img src={Trainer3} alt="Picture" className="p-8" />
           <div className="text-justify px-8">
           <h2 className="text-0 text-red-500 py-1">Power Trainer</h2>
           <h1 className="text-xl font-bold py-1">Paul D. Newman</h1>
           <p>Leads kinesthetic group exercise <br />classes, design classes to match the <br />skill and learning level of all <br />participants.</p>
           </div>

           <div className="text-justify px-8">
            <p className="text-0 font-bold py-4 hover:text-red-600 transition-300">f x in Be</p>
           </div>
         </div>
       </div>
      </div>
    </section>
  );
}

export default Services