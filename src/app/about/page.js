'use client';
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import CIcon from "../components/c"
import Head from 'next/head.js';
// Import skill icons from React Icons or any other library
import { FaPython, FaJsSquare, FaDatabase, FaReact, FaLinux, FaHtml5, FaCss3Alt,FaCode } from 'react-icons/fa';
import { SiCplusplus, SiSap, SiNextdotjs, SiMongodb, SiPostgresql } from 'react-icons/si'; // For C++ and Java, SAP, Next.js, MongoDB, and Postgres
import { DiC, DiSqllite, DiJava} from 'react-icons/di'; // For C and a placeholder for SQL
import{
  PiFileSqlThin
}from "react-icons/pi";
import { EvervaultCard } from '../components/profileDynamic'

const useTypewriter = (text, typingSpeed = 150, startTyping = false) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    if (!startTyping) return; // Only start typing when startTyping is true

    if (typedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setTypedText(text.substring(0, typedText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeoutId);
    }
  }, [typedText, text, typingSpeed, startTyping]);

  return typedText;
};


export default function About() {

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
  const aboutText = "Hi, I’m Yotham. I recently graduated from Rensselaer Polytechnic Institute with a degree in Computer Science. Right now, I’m working as a Software Developer at Guidance Analytics.";
  const typedAboutText = useTypewriter(aboutText, 50, !isLoading); // Start typing only when isLoading is false

  if (isLoading) {
    return <LoadingComponent />;
    
  }
  return (
    <div>
      <Head>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Navbar page = 'about'/>
      {/* About Section */}
      <EvervaultCard>
      <div className="flex flex-col items-center justify-center text-gray-200 ">
        <img src="/assets/family.jpg" alt="Family Photo" width={300} height={300} className="rounded-lg border-4 border-gray-200" draggable={false} />
          <h2 className="text-4xl font-medium mt-12">About Me</h2>
          <p className="mt-4 mx-4 sm:mx-4 md:mx-0 lg:mx-0 xl:mx-0 max-w-2xl text-lg text-center">
        {typedAboutText}
        </p>
      </div>

      {/* Skills Section */}
      <div className="py-12 pb-14">
        <h2 className="text-center pb-12 pt-12 text-4xl text-gray-200 font-medium">Skills</h2>
        <div className="primary-bg even-shadow border-2 border-gray-200 p-10 rounded-lg max-w-6xl mx-10 lg:mx-auto px-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-7 lg:grid-cols-7 gap-10 ">
          {/* Programming Languages */}
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1">
            <FaPython className="text-6xl" />
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <FaJsSquare className="text-6xl" />
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <SiCplusplus className="text-6xl" />
          </div>
          <div className="flex flex-col items-center pt-2 skill-icon bg-gray-200 rounded-lg">
            {/* Placeholder for C */}
            <CIcon className="text-6xl" />
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <DiJava className="text-6xl" /> 
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <FaHtml5 className="text-6xl" />
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <FaCss3Alt className="text-6xl" />
          </div>

          {/* Databases */}
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <SiPostgresql className="text-6xl" />
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <SiMongodb className="text-6xl" />
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <PiFileSqlThin className="text-6xl" />
          </div>

          {/* Frameworks/Libraries */}
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <FaReact className="text-6xl" />
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <SiNextdotjs className="text-6xl" />
          </div>

          {/* Tools/Operating Systems */}
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <FaLinux className="text-6xl" />
          </div>
          <div className="flex flex-col items-center skill-icon bg-gray-200 rounded-lg p-1 ">
            <SiSap className="text-6xl" />
          </div>
        </div>
      </div>
      </EvervaultCard>


      <Footer/>
    </div>
  );
}
