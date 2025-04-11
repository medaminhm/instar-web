import React from 'react';
import { Link } from 'react-scroll';

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black z-50 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <a href="/" >
          <img
            src="src/assets/images/logooooooblanc.png"
            className="w-32 md:w-40"
            alt="Instar Logo"
          /></a>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-6">
          {["Accueil", "À propos de nous","Services", "Projets" ].map((text, index) => (
            <Link
              key={index}
              to={text.toLowerCase().replace(/\s+/g, "-")} // Convert text to lowercase ID format
              smooth={true}
              duration={500}
              className="text-white cursor-pointer px-3 py-2 relative group">
              {text}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full z-10"></span>
            </Link>
          ))}
          {/* Contact Button */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="p-3 px-6 pt-2 text-white bg-primaryBlue rounded-md hover:bg-hoverPrimaryBlue cursor-pointer">
            Contactez-nous
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
