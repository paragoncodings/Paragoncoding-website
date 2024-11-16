import React, { useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import teamMembers from './TeamData';
import { Link } from 'react-router-dom';
import PageTitle from '../PageTitle';
import Footer from '../../Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
const TeamSection = () => {
    useEffect(() => {
        AOS.init({ duration: 3000 });
      }, []);
    return (
        <>
        <PageTitle title="OUR TEAM"/>
        <section className="bg- py-24">
               {/* <h1 className='text-center text-2xl text-[#99FF00] py-8 font-bold'>OUR TEAM</h1> */}
            <div className="container mx-auto px-4 " data-aos="fade-right">
                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8 gap-y-16 ">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col bg-gray-100 rounded-lg shadow-md overflow-hidden border border-green">
                            <Link to={`/teamdisplay/${member.id}`} className="relative flex-1">

                                <img
                                    src={member.imgSrc}
                                    alt={member.name}
                                    className="w-full h-72 object-fill "
                                />
                                <div className="absolute  inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-1000 cursor-pointer  ">
                                    <div className='w-56 mt-72  h-56 rounded-full bg-dark transform hover:scale-105 duration-300 transition-all '>
                                        <div className="flex justify-center space-x-4 mt-6 id-1">
                                            <Link to={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                                                <FaFacebookF className='hover:text-green text-blue h-5 w-5 ' />
                                            </Link>
                                            <Link to={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                                                <FaTwitter className='hover:text-green text-blue w-5 h-5' />
                                            </Link>
                                            <Link to={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                                                <FaInstagram className='hover:text-green text-blue h-5 w-5' />
                                            </Link>
                                            <Link to={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                                                <FaLinkedinIn className='hover:text-green text-blue h-5 w-5' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>


                            </Link>
                            <div className="cursor-pointer p-4 w-auto ml-6  border border-green bg-dark absolute mt-60 shadow-xl rounded-md  text-center group transition-all  ">

                                <div className="relative z-10 ">
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
                                        <Link to={member.profileLink} className="text-green group-hover:text-dark">
                                            {member.name}
                                        </Link>
                                    </h3>
                                    <p className="text-blue  group-hover:text-dark">{member.position}</p>
                                </div>
                                <span className="absolute inset-0 bg-blue transform scale-y-0 origin-top transition-transform duration-500 ease-in-out group-hover:scale-y-100"></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
       
        </section>
        <Footer/>
        </>
      
    );
};

export default TeamSection;