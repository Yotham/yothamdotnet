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
      <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
      <Navbar page = 'about'/>
      {/* About Section */}
      <div className="flex flex-col items-center justify-center py-20 text-white ">
        <img src="/assets/fam.jpg" alt="Family Photo" width={300} height={300} className="rounded-lg border-2 border-white" draggable={false} />
        
        <h2 className="text-4xl font-medium mt-4">About Me</h2>
        <p className="mt-4 mx-4 sm:mx-4 md:mx-0 lg:mx-0 xl:mx-0 max-w-2xl text-center ">
        My name is Yotham. I am completing my senior year at Rennselear Polytechnic Institute, where I am studying <strong>Computer Science</strong>. My last internship was at <strong>General Electric</strong> where I worked as a Digital Technology Intern and helped my team to create project solutions, standarize work, and automate work flows. Most recently I have been leading a team of 4 developers to create a web and mobile application called <strong>ShopEasy</strong>.
        </p>
      </div>

      {/* Skills Section */}
      <div className="py-12 bg-white pb-14">
        <h2 className="text-center pb-12 text-4xl font-medium">Skills</h2>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-7 lg:grid-cols-7 gap-10 ">
          {/* Programming Languages */}
          <div className="flex flex-col items-center skill-icon ">
            <FaPython className="text-6xl" />
          </div>
          <div className="flex flex-col items-center skill-icon ">
            <FaJsSquare className="text-6xl" />
          </div>
          <div className="flex flex-col items-center skill-icon ">
            <SiCplusplus className="text-6xl" />
          </div>
          <div className="flex flex-col items-center pt-2 skill-icon">
            {/* Placeholder for C */}
            <CIcon className="text-6xl" />
          </div>
          <div className="flex flex-col items-center skill-icon ">
            <DiJava className="text-6xl" /> 
          </div>
          <div className="flex flex-col items-center skill-icon ">
            <FaHtml5 className="text-6xl" />
          </div>
          <div className="flex flex-col items-center skill-icon ">
            <FaCss3Alt className="text-6xl" />
          </div>

          {/* Databases */}
          <div className="flex flex-col items-center skill-icon ">
            <SiPostgresql className="text-6xl" />
          </div>
          <div className="flex flex-col items-center skill-icon ">
            <SiMongodb className="text-6xl" />
          </div>
          <div className="flex flex-col items-center skill-icon ">
            <PiFileSqlThin className="text-6xl" />
          </div>

          {/* Frameworks/Libraries */}
          <div className="flex flex-col items-center skill-icon ">
            <FaReact className="text-6xl" />
          </div>
          <div className="flex flex-col items-center skill-icon ">
            <SiNextdotjs className="text-6xl" />
          </div>

          {/* Tools/Operating Systems */}
          <div className="flex flex-col items-center skill-icon ">
            <FaLinux className="text-6xl" />
          </div>
          <div className="flex flex-col items-center skill-icon ">
            <SiSap className="text-6xl" />
          </div>
        </div>
      </div>


      <Footer/>
    </div>
  );
}
