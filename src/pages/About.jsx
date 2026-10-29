
import React from 'react';
import MicahDan from "../assets/MicahDan.png";

const About = () => {
  return (
    <>
      {/* About the Author Section */}
      <section className="bg-green-100 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 px-6 py-20 md:px-12 lg:px-20">

        {/* Author Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={MicahDan}
            alt="Micah-Daniels Gbenga"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full"
          />
        </div>

        {/* Author Information */}
        <div className="w-full md:w-1/2 py-4 md:py-10 lg:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-5 text-center md:text-left">
            About The Author
          </h1>

          <p className="text-justify text-base sm:text-lg leading-7">
            Micah-Daniels Gbenga is a native of Eruku,
            in Ekiti Local Government Area, in Kwara State.
            He is an Evangelist, Author, Teacher, Speaker,
            President of Christ Focus Evangelical Ministry
            Home of Missions, and a Marriage Counsellor.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-5 py-12 sm:px-8 md:px-12 lg:px-20">
        <div className="bg-blue-200 py-10 px-5 sm:px-8 md:py-14 md:px-10 lg:px-16 text-center rounded-2xl border border-blue-800">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Ready to upgrade your
            <br className="hidden sm:block" /> guest experience?
          </h1>

          <p className="py-5 text-base sm:text-lg leading-7 max-w-2xl mx-auto">
            Join hundreds already using SafeClip to automate guest
            communication and deliver 5-star experiences at scale.
          </p>

          <button className="bg-blue-500 hover:bg-blue-600 py-3 px-6 text-white font-bold rounded-lg transition-colors">
            Sign Out
          </button>

        </div>
      </section>
    </>
  );
};

export default About;
