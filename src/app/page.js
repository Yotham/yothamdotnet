'use client'
import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar.js"
import Footer from "./components/Footer.js"
import EmailModal from "./components/EmailModal.js";
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronDown } from 'react-icons/fa';

import Head from 'next/head';
import { EvervaultCard } from './components/profileDyanmic'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingProject1, setLoadingProject1] = useState(true); // Loading state for Project 1
  const [loadingProject2, setLoadingProject2] = useState(true); // Loading state for Project 2

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  const [isLoading, setIsLoading] = useState(true); // State to control the loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 500 milliseconds
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);
  const LoadingComponent = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>
  );
  if (isLoading) {
    return <LoadingComponent />;
    
  }
  return (
    <div>
      <Head>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      
      {/* Main content should render if both iframes have loaded */}
      <Navbar page = '/'/>
      {/* {(loadingProject1 && loadingProject2) && <LoadingComponent />} */}
      <div className=" text-gray-200"   >

      <EvervaultCard text="Yotham Sage" className="w-full h-full select-none">
        {/* Profile-specific content goes here, passed as children to EvervaultCard */}
        <div className = "flex flex-col items-center">
          <img src="assets/profilepic.jpg" alt="Profile Picture" className="rounded-lg w-40 h-40 object-cover even-shadow border-4 border-gray-200" draggable={false}/>
          <h1 className="text-4xl font-medium mt-4">Yotham Sage</h1>
          <p className="text-xl mt-2">Software Developer</p>
          <div className="flex mt-4 space-x-4">
            <a href="https://www.linkedin.com/in/yothamsage" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedin size="1.5em" />
            </a>
            <a href="https://github.com/yotham" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaGithub size="1.5em" />
            </a>
            <button onClick={openModal} className="hover:text-gray-300">
              <FaEnvelope size="1.5em" />
            </button>
          </div>
          <EmailModal isOpen={isModalOpen} onClose={closeModal} />

        </div>

        {/* <div className="border w-screen mt-12"></div> */}
        <h2 id="featured-projects" className="text-center pb-12 pt-40 text-4xl font-medium">Featured Projects</h2>
        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col p-8 mx-8 md:mx-auto border-2 rounded-lg even-shadow primary-bg text-gray-200 border-gray-200 justify-center">
            <div className="flex flex-row items-center mb-8 justify-between w-full">
              <h1 className="text-2xl md:text-4xl font-medium">ShopEasy</h1>
              <a href="https://github.com/Yotham/ShopEasy" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <FaGithub className="icon-standard" />
              </a>
            </div>
            <div className="flex flex-col sm:flex-col md:flex-col lg-flex-row xl:flex-row gap-8">
              {/* <div className="aspect-w-16 aspect-h-9" style={{ maxWidth: '50%', maxHeight: '50%' }}>
                <iframe className="w-full h-full rounded-lg border-2 border-gray-200" src="https://drive.google.com/file/d/1mdlhZb7fk78ssrOYwtEkyH11-IThMQxp/preview" allowFullScreen onLoad={() => {console.log("Project 1 iframe loaded"); setLoadingProject1(false)}} style={{ minWidth: '480px', minHeight: '270px' }}></iframe> 
              }*/}
                <div className="relative">
                  <img src="assets/shopeasyThumbnail.png" alt="Project Image" className="w-80 md:w-full md:max-w-xl rounded-lg object-cover border-2 border-gray-200 even-shadow" draggable={false} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <a href="https://drive.google.com/file/d/1mdlhZb7fk78ssrOYwtEkyH11-IThMQxp/preview" target="_blank" rel="noopener noreferrer" className="absolute bg-gray-200 text-black rounded shadow p-2 hover:bg-gray-300">View Demo</a>
                  </div>
                </div>
              <p className="max-w-xs md:max-w-xl">A web and mobile application, which takes in user data such as age, weight, height, and gender. Then uses this data to generate grocery list suited for the user{"'"}s dietary needs, from a selected grocery store.</p>
            </div>
            <div className="mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 justify-start text-center text-lg md:text-xl font-medium items-center">
                <div className="bg-gray-200 text-black rounded shadow p-1 hover:bg-gray-300">Python</div>
                <div className="bg-gray-200 text-black rounded shadow p-1 hover:bg-gray-300">React.js</div>
                <div className="bg-gray-200 text-black rounded shadow p-1 hover:bg-gray-300">Next.js</div>
                <div className="bg-gray-200 text-black rounded shadow p-1 hover:bg-gray-300">MongoDB</div>
                <div className="bg-gray-200 text-black rounded shadow p-1 hover:bg-gray-300">HTML</div>
                <div className="bg-gray-200 text-black rounded shadow p-1 hover:bg-gray-300">Tailwind CSS</div> 
              </div>
            </div>


          </div>
          <div className="flex flex-col p-8  mx-8 md:mx-auto border-2 rounded-lg even-shadow primary-bg text-gray-200 border-gray-200 justify-center">
            <div className="flex flex-row items-center mb-8 justify-between w-full">
              <h1 className="text-2xl md:text-4xl font-medium">Best Professors</h1>
              <a href="https://github.com/yotham" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
               <FaGithub className="icon-standard" />
              </a>
            </div>
            <div className="flex flex-col sm:flex-col md:flex-col lg-flex-row xl:flex-row gap-8">
              {/* <div className="aspect-w-16 aspect-h-9" style={{ maxWidth: '50%', maxHeight: '50%' }}> 
                <iframe className="w-full h-full rounded-lg border-2 border-gray-200" src="https://drive.google.com/file/d/1ntfL0C3FoJT6tlMegHRp-vR-SjoUZEPJ/preview" allowFullScreen onLoad={() => {console.log("Project 1 iframe loaded"); setLoadingProject2(false)}} style={{ minWidth: '480px', minHeight: '270px' }}></iframe>
              </div> */}
                <div className="relative">
                  <img src="assets/BestProfessorsThumbnail.png" alt="Project Image" className="w-80 md:w-full md:max-w-xl rounded-lg object-cover border-2 border-gray-200 even-shadow" draggable={false} />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <a href="https://drive.google.com/file/d/1ntfL0C3FoJT6tlMegHRp-vR-SjoUZEPJ/preview" target="_blank" rel="noopener noreferrer" className="absolute bg-gray-200 text-black rounded shadow p-2 hover:bg-gray-300">View Demo</a>
                  </div>
                </div>
              <p className="max-w-xs md:max-w-xl">A web application, which compiles the ratings of RPI professors into one place. Allowing the user{"'"}s to search by professor or course code. When searched by course code it will display the professors in order of their rankings.</p>
            </div>
            <div className="mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 justify-start text-center text-lg md:text-xl font-medium items-center">
                <div className="bg-gray-200 text-black rounded shadow p-1 hover:bg-gray-300">Python</div>
                <div className="bg-gray-200 text-black rounded shadow p-1 hover:bg-gray-300">React.js</div>
                <div className="bg-gray-200 text-black rounded shadow p-1 hover:bg-gray-300">AWS Amplify</div>
                <div className="bg-gray-200 text-black rounded shadow p-1 hover:bg-gray-300">HTML</div>
                <div className="bg-gray-200 text-black rounded shadow p-1 hover:bg-gray-300">Tailwind CSS</div>
              </div>
            </div>


          </div>
        </div>
      </EvervaultCard>


    </div>

    <Footer/>
    </div>

  );
}
