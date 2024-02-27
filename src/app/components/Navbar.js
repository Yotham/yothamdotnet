import Link from 'next/link';

export default function Navbar({ page }) {
  // Function to determine if the link is active
  const isActive = (currentPage) => page === currentPage;
  console.log(page)

  return (
    <nav className="primary-bg flex justify-between items-center even-shadow border-b-2 border-stone-950 text-white p-8 font-medium text-xl mx-auto sticky top-0 z-40">
      <div className="flex items-center">
        <Link href="/">
          <img src="/assets/yswhite.png" alt="Logo" className="h-8 mr-4 cursor-pointer" draggable={false} />
        </Link>
      </div>
      <ul className="flex justify-end space-x-4">
        <li className={isActive('/') ? 'border-b-2 border-white' : ''}>
          <Link href="/">
            <span className="hover:text-stone-400 cursor-pointer">Home</span>
          </Link>
        </li>
        <li className={isActive('about') ? 'border-b-2 border-white' : ''}>
          <Link href="/about">
            <span className="hover:text-stone-400 cursor-pointer">About</span>
          </Link>
        </li>
        <li className={isActive('resume') ? 'border-b-2 border-white' : ''}>
          <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-stone-400 cursor-pointer">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
