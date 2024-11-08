import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import teamMembers from './TeamData';
import Footer from '../../Footer/Footer';
const TeamMemberDetail = () => {
  const { id } = useParams();
  const member = teamMembers.find(member => member.id === parseInt(id));

  if (!member) {
    return <div>Team member not found.</div>;
  }

  return (
    <>
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start space-y-10 lg:space-y-0 lg:space-x-16">
        
        {/* Profile Image */}
        <div className="relative flex-shrink-0">
          <img
            src={member.imgSrc}
            alt={member.name}
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-xl transition-transform transform hover:scale-105 border-4 border-[#99FF00]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 rounded-full"></div>
        </div>

        {/* Member Details */}
        <div className="w-full lg:w-2/3 bg-dark shadow-lg rounded-lg p-10 space-y-6 border-2 border-green">
          <h1 className="text-3xl font-semibold text-[#99FF00]">{member.name}</h1>
          
          <div className="space-y-4 text-blue">
            <h2 className="text-lg">
              <span className="font-semibold">Position:</span> <span className="text-[#99FF00]">{member.position}</span>
            </h2>
            <h2 className="text-lg">
              <span className="font-semibold">Experience:</span> <span className="text-[#99FF00]">{member.experience}</span>
            </h2>
            <h2 className="text-lg">
              <span className="font-semibold">Contact:</span> <span className="text-[#99FF00]">{member.contact}</span>
            </h2>
            <h2 className="text-lg">
              <span className="font-semibold">Email:</span> <span className="text-[#99FF00]">{member.email}</span>
            </h2>
          </div>
          
          {/* View Profile Link */}
          <p className="pt-6">
            <Link to={member.profileLink} className="text-blue  font-medium underline hover:text-green">
              View Full Profile
            </Link>
          </p>
          
          {/* Social Links */}
          <div className="pt-6 flex space-x-6">
            {Object.entries(member.socialLinks).map(([key, link]) => (
              <Link
                key={key}
                to={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue hover:text-green transition-colors"
              >
                {key === 'facebook' && <FaFacebookF className="w-5 h-5" />}
                {key === 'twitter' && <FaTwitter className="w-5 h-5" />}
                {key === 'instagram' && <FaInstagram className="w-5 h-5" />}
                {key === 'linkedin' && <FaLinkedinIn className="w-5 h-5" />}
              </Link>
            ))}
          </div>
        </div>
      </div>

  
    </section>
    <Footer/>

    </>
  );
};

export default TeamMemberDetail;
