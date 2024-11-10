import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaCheckCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-10 mt-10">
      <div className="container mx-auto px-4 space-y-10">
        {/* Header Section within Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-6">
          
          {/* Company Logo */}
          <div className="flex justify-center lg:justify-start">
            <img src={logo} alt="Company Logo" className="w-20 h-20 object-contain cursor-pointer transition-transform transform hover:scale-105" />
          </div>

          {/* Call Option */}
          <div className="flex items-center space-x-4 text-center lg:text-left cursor-pointer">
            <div className="bg-[#2563EB] p-3 rounded-full">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green">Call Us</h4>
              <p className="text-sm text-blue">+92 325-1255718</p>
              <p className="text-sm text-blue" >+92 306-0711693</p>
            </div>
          </div>

          {/* Email Option */}
          <div className="flex items-center space-x-4 text-center lg:text-left cursor-pointer">
            <div className="bg-[#16A34A] p-3 rounded-full">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="text-lg font-semibold  text-green ">Email Us</h4>
              <p className="text-sm text-blue">paragoncodings@gmail.com</p>
            </div>
          </div>

          {/* Location Option */}
          <div className="flex items-center space-x-4 text-center lg:text-left cursor-pointer">
            <div className="bg-[#C32735] p-3 rounded-full">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green">Our Location</h4>
              <p className="text-sm text-blue">Akbar colony Bahawalpur</p>
            </div>
          </div>
        </div>

        {/* Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 ">
          
          {/* About Company */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-green">ABOUT COMPANY</h4>
            <p className="mb-4 text-blue">
              We are a leading IT solutions provider, offering innovative services to help businesses achieve success in the digital age.
            </p>
            <div className="flex space-x-4">
              <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-2 rounded-full hover:scale-105 transition-transform bg-[#2563EB]">
                <FaFacebookF  className=''/>
              </Link>
              <Link to="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-400 p-2 rounded-full hover:scale-105 transition-transform bg-[#60A5FA]">
                <FaTwitter />
              </Link>
              <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-600 p-2 rounded-full hover:scale-105 transition-transform">
                <FaInstagram />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-green">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li><Link to="/home" className="hover:text-green text-blue ">Home</Link></li>
              <li><Link to="/about" className="hover:text-green text-blue ">About</Link></li>
              <li><Link to="/services" className="hover:text-green text-blue ">Services</Link></li>
              <li><Link to="/projects" className="hover:text-green text-blue ">Projects</Link></li>
              <li><Link to="/team" className="hover:text-green text-blue ">Team</Link></li>
              {/* <li><Link to="/contact" className="hover:text-green text-blue  ">Contact</Link></li> */}
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-green">IT SERVICES</h4>
            <ul className="space-y-2 text-blue ">
              <li className="flex items-center cursor-pointer">
                <FaCheckCircle className="text-green mr-2" /> <Link to="/services" className='hover:text-green'>Web Development</Link>
              </li>
              <li className="flex items-center cursor-pointer">
                <FaCheckCircle className="text-green mr-2" /> <Link to="/services" className='hover:text-green'>Mobile App Development</Link>
              </li>
              <li className="flex items-center cursor-pointer">
                <FaCheckCircle className="text-green mr-2" /> <Link to="/services" className='hover:text-green'>Artificial Intelligence</Link>
              </li>
              <li className="flex items-center cursor-pointer">
                <FaCheckCircle className="text-green mr-2" /> <Link to="/services" className='hover:text-green'>Android Apps</Link>
              </li>
              <li className="flex items-center cursor-pointer">
                <FaCheckCircle className="text-green mr-2" /> <Link to="/services" className='hover:text-green'>Digital Marketing</Link>
              </li>
              <li className="flex items-center cursor-pointer">
                <FaCheckCircle className="text-green mr-2" /> <Link to="/services" className='hover:text-green'>Graphic Designing</Link>
              </li>
            </ul>
          </div>         
        </div>

        {/* Copyright Section */}
        <div className="border-t border-green mt-8 pt-4 text-center text-sm text-blue">
        <p>© 2024 - All Rights Reserved  - Paragon Codings</p>
          <div className="flex justify-center space-x-4 mt-2 ">
            <Link to="/terms" className="hover:text-green">Terms & Conditions</Link>
            <Link to="/careers" className="hover:text-green">Careers</Link>
            <Link to="/privacy" className="hover:text-green">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
