import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import about2 from './../../../assets/about2.jpg'
const About2 = () => {
  return (
    <section className="bg-slate-900 border-green border-t-2 mt-10 text-gray-100 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 md:px-8">
        {/* Left Column */}
        <div className="bg-[#3BFBFC] p-8 md:w-1/2 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Have a Project on mind?</h2>
          <p className="text-gray-700 mb-6">
            We can help you bring your ideas to life. Let's talk about what we can build and raise together.
          </p>
          <button className="flex items-center bg-dark text-white py-2 px-4 rounded hover:text-black hover:bg-green">
            Connect with us!
            <FiArrowRight className="ml-2" />
          </button>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 flex flex-col items-center text-center md:text-left">
          <img
            src={about2} // Replace with your image path
            alt="Working together"
            className="rounded-lg mb-6 w-full h-auto object-cover"
          />
          <h2 className="text-3xl text-green font-bold mb-4">Let us together build a flourishing business</h2>
          <p className="text-blue">
            When connected with us, you aren’t growing your business alone. We have your back and put in our best to
            contribute to the growth of your entire team and organization. So, if you are looking for the right agency
            that’ll help you build a good online presence and bring in more conversions and revenue, we are right here!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About2;