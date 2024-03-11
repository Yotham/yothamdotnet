import { useState } from 'react';
import Link from 'next/link';

export default function Navbar({ page }) {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (currentPage) => page === currentPage;
  const dropdownMaxHeight = isOpen ? "500px" : "0px";

  return (
    <nav className="primary-bg flex justify-between items-center even-shadow border-b-2 border-stone-950 text-white p-8 font-medium text-xl mx-auto sticky top-0 z-40">
      <div className="flex items-center">
        <Link href="/">
          <img src="/assets/ysgray.png" alt="Logo" className="h-8 mr-4 cursor-pointer" draggable={false} />
        </Link>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className={`absolute top-full right-0 left-0 w-full primary-bg md:relative md:top-auto md:right-auto md:left-auto md:mt-0 md:w-auto shadow-lg md:shadow-0 border-b-2 md:border-b-0 ${isOpen ? 'flex text-center justify-center mt-0 py-2' : 'hidden'} md:block`}>
        <ul className={`md:flex justify-end space-x-0 md:space-x-4`}>
          <li className={isActive('/') ? 'bg-gray-200 p-2 text-black rounded-lg' : 'p-2'}>
            <Link href="/">Home</Link>
          </li>
          <li className={isActive('about') ? 'bg-gray-200 p-2 text-black rounded-lg' : 'p-2'}>
            <Link href="/about">About</Link>
          </li>
          <li className={isActive('resume') ? 'bg-gray-200 p-2 text-black rounded-lg' : 'p-2'}>
            <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
