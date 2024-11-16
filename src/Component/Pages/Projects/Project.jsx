import React, { useEffect, useState } from 'react';
import { FaLink, FaTimes } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const websites = [
  { 
    title: 'TeqTak Social App', 
    image: './assets/investersc.PNG', 
    description: 'Investor-focused landing page', 
    link: 'https://teqtak.vercel.app/', 
    languages: 'React, Tailwind CSS, JavaScript' 
  },
  { 
    title: 'Karami Ecommerce Store', 
    image: './assets/project1.PNG', 
    description: 'Karami Ecommerce Store', 
    link: 'https://karamigroupbh.com/', 
    languages: 'Wordpress' 
  },
  { 
    title: 'Maiwell Ecommerce Store', 
    image: './assets/project2.PNG', 
    description: 'Maiwell Ecommerce Store', 
    link: 'https://www.maiwell.com/', 
    languages: 'MERN Stack' 
  },
  { 
    title: 'Image Collection Website', 
    image: './assets/project3.PNG', 
    description: 'Pinterest Similar Site', 
    link: 'https://www.stockvault.net/', 
    languages: 'Next JS, SCSS' 
  },
  { 
    title: 'BLOG WEBSITE', 
    image: './assets/project4.PNG', 
    description: 'Blog Website', 
    link: 'https://infokidunya.com/', 
    languages: 'Next JS, SCSS' 
  },
  { 
    title: 'Ecommerce Store of Shoes', 
    image: './assets/project5.PNG', 
    description: 'Ecommerce Store', 
    link: 'https://sbshoesshop.com/', 
    languages: 'Wordpress' 
  },
  { 
    title: 'Shoe-Making App', 
    image: './assets/shoeApp.PNG', 
    description: 'E-commerce app for shoe-making', 
    link: 'https://sheo-maker-design.vercel.app/', 
    languages: 'React, MongoDB, Node.js' 
  },
];

const apps = [
  { 
    title: 'Resistor Color Code Calculator', 
    image: './assets/calculater.jpg', 
    description: 'Resistor Color Code Calculator', 
    link: 'https://play.google.com/store/apps/details?id=com.eskillcenter.myapplication&pli=1', 
    languages: 'Java, SQLite, Android SDK' 
  },
  { 
    title: 'Electrical Engineering Books', 
    image: './assets/electricalbook.jpg', 
    description: 'Electrical Engineering Books', 
    link: 'https://play.google.com/store/apps/details?id=com.eskillcenter.electricalengineeringbooks', 
    languages: 'Java, SQLite, Android SDK' 
  },
  { 
    title: 'Digital Tasbeeh Counter', 
    image: './assets/tesbhi.webp', 
    description: 'Digital Tasbeeh Counter', 
    link: 'https://play.google.com/store/apps/details?id=com.revealquran.tasbeehcounter', 
    languages: 'Java, SQLite, Android SDK' 
  },
  { 
    title: 'Munajat Maqbool | مناجات مقبول', 
    image: './assets/munajat.webp', 
    description: 'Munajat Maqbool | مناجات مقبول', 
    link: 'https://play.google.com/store/apps/details?id=com.revealquran.munajatemaqbool', 
    languages: 'Java, SQLite, Android SDK' 
  },
  { 
    title: 'Seerat-ul-Nabi ( S.A.W.W )', 
    image: './assets/seratunnabi.webp', 
    description: 'Seerat-ul-Nabi ( S.A.W.W )', 
    link: 'https://play.google.com/store/apps/details?id=com.revealquran.munajatemaqbool', 
    languages: 'Java, SQLite, Android SDK' 
  },
];

const Project = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectCategory, setProjectCategory] = useState('all');

  const showMoreProjects = () => setVisibleProjects(prev => prev + 3);
  const openProjectModal = (project) => setSelectedProject(project);
  const closeProjectModal = () => setSelectedProject(null);

  const displayProjects = 
    projectCategory === 'websites' ? websites 
    : projectCategory === 'apps' ? apps 
    : [...websites, ...apps].slice(0, visibleProjects);
    useEffect(() => {
      AOS.init({ duration: 3000 });
    }, []);

  return (
    <div className=''>
    <div className="container mx-auto p-5 mt-10 "data-aos="fade-right">
      
      <div className="flex gap-4 mb-4 ">
        {['all', 'websites', 'apps'].map((category) => (
          <button 
            key={category}
            onClick={() => { setProjectCategory(category); setVisibleProjects(3); }}
            className={`py-2 px-4 rounded transition-colors ${projectCategory === category ? 'bg-[#73FAF9] text-white' : 'bg-[#37383C] text-[#7CFC0A]'}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayProjects.map((project, index) => (
          <div 
            key={index} 
            className="relative border rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => openProjectModal(project)}
          >
            <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      {projectCategory === 'all' && visibleProjects < (websites.length + apps.length) && (
        <button 
          onClick={showMoreProjects} 
          className="flex justify-center items-center mt-5 bg-[#73FAF9] text-white py-2 px-4 rounded hover:bg-[#37383C] hover:text-[#7CFC0A] transition"
        >
          View More Projects
        </button>
      )}

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg p-6 w-full max-w-md">
            <button
              onClick={closeProjectModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <FaTimes size={20} />
            </button>
            <h3 className="text-lg font-semibold mb-2">{selectedProject.title}</h3>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-60 object-cover rounded mb-4" />
            <p className="text-sm mb-1"><strong>Description:</strong> {selectedProject.description}</p>
            <p className="text-sm mb-1"><strong>Languages:</strong> {selectedProject.languages}</p>
            <a 
              href={selectedProject.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 mt-2 bg-[#73FAF9] text-white py-1 px-2 rounded hover:bg-[#37383C] hover:text-[#7CFC0A] transition"
            >
              <FaLink className="text-sm" /> <span>Visit Project</span>
            </a>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Project;