
import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10 sm:px-6 bg-gray-50">

      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-gray-200 flex flex-col gap-5 w-full max-w-md p-5 sm:p-8 rounded-2xl shadow-lg"
      >
        {/* Name */}
        <div className="flex gap-2 flex-col items-start w-full">
          <label htmlFor="name" className="font-medium">
            Your Name:
          </label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            className="border border-black py-3 px-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="flex gap-2 flex-col items-start w-full">
          <label htmlFor="email" className="font-medium">
            Your E-mail:
          </label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="border border-black py-3 px-4 rounded-xl w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message */}
        <div className="flex gap-2 flex-col items-start w-full">
          <label htmlFor="message" className="font-medium">
            Your Message:
          </label>

          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Write your message here..."
            required
            className="border border-black py-3 px-4 rounded-xl w-full resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors duration-300 w-full sm:w-auto"
          >
            Send Message
          </button>
        </div>

      </form>
    </section>
  );
};

export default Contact;
