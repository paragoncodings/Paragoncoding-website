import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';
import logo from '../../assets/logo.png'
const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleMenuClick = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const handleSubMenuClick = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    setOpenMenu(index);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  return (
    <>
      <div className="flex items-center justify-between px-4 md:px-8  bg-dark  sticky top-0 z-20 border-b-2 border-green text-xl">
        {/* Logo */}
      <div className='flex'>
      <img src={logo} alt="Company Logo" className="w-10 h-10 m-1 rounded-full md:w-20 md:h-20  object-contain cursor-pointer transition-transform transform hover:scale-105" />
      <h1 className='mt-6 ml-1 text-blue hover:text-green cursor-pointer text-3xl '>Paragon Coding's</h1>
      </div>
          
        {/* Navigation Links for Large Screens */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-blue font-bold">
          {[
            { name: 'Home', link: '/home' },
            { name: 'About Us', link: '/about' },
            { name: 'Service', link: '/services',},
            { name: 'Project', link: '/projects' },
            { name: 'Our Team', link: '/team' },
            // { name: 'Contact', link: '/contact' },
          ].map((item, index) => (
            <li
            onClick={()=>setOpenMenu(false)}
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1 lg:gap-2">
                <NavLink to={item.link} className="hover:text-[#7CFC0A]">
                  {item.name}
                  <hr  className='hidden  border-none h-[4px] bg-[#7CFC0A] transition-all duration-300 ease-in-out'/>
                </NavLink>
                {item.subMenu && (
                  <button
                    onClick={() => handleMenuClick(index)}
                    className="focus:outline-none "
                  >
                    {openMenu === index ? <FaMinus /> : <FaPlus />}
                  </button>
                )}
              </div>
              {item.subMenu && openMenu === index && (
                <ul
                  id={`parent-${index}`}
                  className="absolute bg-white text-black w-40 lg:w-48 p-2 origin-bottom transform transition-transform duration-300 ease-out scale-y-0 group-hover:scale-y-100 "
                >
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} onClick={()=>setOpenMenu(false)} className="border-b-2 hover:bg-[#73FAF9] hover:text-white ">
                      <NavLink to={subItem.link} className="block px-4 py-2">
                        {subItem.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

  

        {/* Hamburger Menu for Small and Medium Screens */}
        <div className="md:hidden">
          <button onClick={() => setOpenMenu(openMenu === 'mobile' ? null : 'mobile')} className="text-white focus:outline-none">
            {openMenu === 'mobile' ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-dark text-blue font-bold text-center sticky top-0 z-20 transition-all duration-500 ease-in-out ${openMenu === 'mobile' ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul>
          {[
            { name: 'Home', link: '/home' },
            { name: 'About Us', link: '/about' },
            { name: 'Service', link: '/services' },
            { name: 'Project', link: '/projects' },
            { name: 'Our Team', link: '/team' },
            // { name: 'Contact', link: '/contact' },
          ].map((item, index) => (
            <li key={index} className="relative border-[1px] group hover:text-white hover:bg-green">
              <div className="flex justify-between transition-all px-4 py-2 ">
                <NavLink to={item.link} className="hover:text-white" onClick={() => setOpenMenu(false)}>
                  {item.name}
                </NavLink>
                {item.subMenu && (
                  <button
                    onClick={() => handleSubMenuClick(index)}
                    className="focus:outline-none"
                  >
                    {openSubMenu === index ? <FaMinus /> : <FaPlus />}
                  </button>
                )}
              </div>
              {item.subMenu && openSubMenu === index && (
                <ul className="border-[1px] bg-[#17123C] text-white transition-all duration-300 ease-in-out">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="hover:text-[#C32735] border-[1px]">
                      <NavLink to={subItem.link} className="block px-4 py-2" onClick={() => setOpenMenu(false)}>
                        {subItem.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;