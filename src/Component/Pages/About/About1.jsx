import React from "react";
import { FaCheck } from "react-icons/fa";
import about1 from './../../../assets/aboutus1.webp'
const About1 = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-dark border-green  border-t-2 p-8 lg:p-16">
      {/* Left Side Image */}
      <div className="flex-shrink-0 w-full lg:w-1/2 mb-8 lg:mb-0">
        <img
          src={about1} // Replace with your image path
          alt="Web Experts at Work"
          className="w-full h-full object-cover rounded "
        />
      </div>

      {/* Right Side Content */}
      <div className="w-full lg:w-1/2 lg:pl-12 space-y-6">
        <h2 className="text-lg font-bold text-green">
          We are a team of 40 web experts with over 12 years of experience in website building and marketing to help businesses grow online.
        </h2>
        <p className="text-blue">
          If you are looking for the best website design, development, and marketing services to grow your business online, we are here to help.
          We are a team of certified experts with tremendous experience in web design, development, and marketing who’ll walk with you all through.
        </p>

        <h3 className="text-2xl font-bold text-green">Our Core Values</h3>
        <ul className="space-y-4 text-blue">
          <li className="flex items-center">
            <FaCheck className="text-green mr-3" />
            Committed to delivering the best
          </li>
          <li className="flex items-center">
            <FaCheck className="text-green mr-3" />
            Honest and transparent services
          </li>
          <li className="flex items-center">
            <FaCheck className="text-green mr-3" />
            We care for your business just like ours
          </li>
          <li className="flex items-center">
            <FaCheck className="text-green mr-3" />
            Keep learning and adapting to new technologies
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About1;