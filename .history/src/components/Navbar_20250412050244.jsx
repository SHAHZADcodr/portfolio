import React from 'react';
import { Link } from 'react-scroll';
import ''

const Navbar = () => {
  const navItems = ['home', 'about', 'education', 'projects', 'contact'];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-800 shadow-lg">
      <ul className="flex justify-center p-4 space-x-6">
        {navItems.map(item => (
          <li key={item} className="capitalize text-white hover:text-cyan-400 cursor-pointer">
            <Link to={item} smooth={true} duration={500} offset={-60}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
