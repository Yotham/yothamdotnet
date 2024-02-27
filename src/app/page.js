'use client'
import React, { useState } from 'react';
import Navbar from "./components/Navbar.js"
import Footer from "./components/Footer.js"
import EmailModal from "./components/EmailModal.js";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Head from 'next/head';
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingProject1, setLoadingProject1] = useState(true); // Loading state for Project 1
  const [loadingProject2, setLoadingProject2] = useState(true); // Loading state for Project 2

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  // Define a loading component
  const LoadingComponent = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>
  );
  return (
    <div>
      <Head>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      
      {/* Main content should render if both iframes have loaded */}
      {loadingProject1 || loadingProject2 ? '' :(<Navbar/>)}
      {(loadingProject1 && loadingProject2) && <LoadingComponent />}
      <div className="flex flex-col items-center justify-center py-20 text-white" style={{ display: loadingProject1 && loadingProject2 ? 'none' : 'flex' }}  >
        <img src="assets/profilepic.jpg" alt="Profile Picture" className="rounded-lg w-40 h-40 object-cover even-shadow border-2" draggable={false}/>
        <div className="border w-3/4 sm:w-2/4 m:w-1/4 lg:w-1/4 xl:w-1/4 mt-6"></div>
        <h1 className="text-4xl font-mediym mt-4">Yotham Sage</h1>
        <p className="text-xl mt-2">Software Engineer</p>
        {/* Icons Container */}
        <div className="flex mt-4 space-x-4">
          {/* LinkedIn and GitHub Icons */}
          <a href="https://www.linkedin.com/in/yothamsage" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaLinkedin size="1.5em" />
          </a>
          <a href="https://github.com/yotham" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaGithub size="1.5em" />
          </a>
          {/* Mail Icon that opens the modal */}
          <button onClick={openModal} className="hover:text-gray-300">
            <FaEnvelope size="1.5em" />
          </button>
        </div>

        {/* Modal for Email */}
        <EmailModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
      {/* Projects Section */}
      <div className="py-12 bg-white" style={{ display: loadingProject1 && loadingProject2 ? 'none' : '' }}>
        <h2 className ="text-center pb-12 text-4xl font-medium">Projects</h2>
        <div className="max-w-xl lg:max-w-6xl xl:max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm-grid-cols-2 md-grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="even-shadow rounded-lg overflow-hidden border-2 border-slate-950">
              <div className="aspect-w-16 aspect-h-9 border-1 border-slate-950">
                <iframe className="w-full h-80" src="https://drive.google.com/file/d/1mdlhZb7fk78ssrOYwtEkyH11-IThMQxp/preview" allowFullScreen onLoad={() =>{console.log("Project 1 iframe loaded"); setLoadingProject1(false)}}></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-medium">ShopEasy</h3>
                <p className="mt-2">A web and mobile application, which takes in user data such as age, weight, height, and gender. Then uses this data to generate grocery list suited for the user{"'"}s dietary needs, from a selected grocery store.</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="even-shadow rounded-lg overflow-hidden  border-2 border-slate-950">
              <div className="aspect-w-16 aspect-h-9 border-1 border-slate-950">
                <iframe className="w-full h-80 " src="https://drive.google.com/file/d/1ntfL0C3FoJT6tlMegHRp-vR-SjoUZEPJ/preview" allowFullScreen onLoad={() => setLoadingProject2(false)}></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-medium">Best Professors</h3>
                <p className="mt-2">A web application, which compiles the ratings of RPI professors into one place. Allowing the user{"'"}s to search by professor or course code. When searched by course code it will display the professors in order of their rankings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loadingProject1 || loadingProject2 ? '':(<Footer/>)}
    </div>

  );
}
