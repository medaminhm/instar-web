import React from 'react'
import { NavLink, BrowserRouter as Router } from 'react-router-dom'

function NavBar() {
  const activeClass = ({ isActive }) =>
    !isActive
      ? 'text-white rounded-md px-3 py-2 relative'
      : 'text-white underline decoration-2 underline-offset-4 rounded-md px-3 py-2 relative';

  return (
    <Router>
      <nav className='relative container lg:mx-auto p-6'>
        <div className='flex items-center justify-between'>
          <div className='pt-2'>
            <img
              src='/assets/images/logooooooblanc.png'
              className='w-32 md:w-40'
            />
          </div>
          <div className='hidden lg:flex space-x-6'>
            <NavLink
              to='#'
              className={`text-white rounded-md px-3 py-2 relative relative group`}>
              Accueil
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full z-10'></span>
            </NavLink>
            <NavLink
              to='#'
              className={`text-white rounded-md px-3 py-2 relative relative group`}>
              Services
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full z-10'></span>
            </NavLink>
            <NavLink
              to='#'
              className={`text-white rounded-md px-3 py-2 relative relative group`}>
              Projets
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full z-10'></span>
            </NavLink>
            <NavLink
              to='#'
              className={`text-white rounded-md px-3 py-2 relative relative group`}>
              À propos de nous
              <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full z-10'></span>
            </NavLink>
            <a
              href='#'
              className='p-3 px-6 pt-2 text-white bg-primaryBlue rounded-md baseline hover:bg-hoverPrimaryBlue'>
              Contactez-nous
            </a>
          </div>
        </div>
      </nav>
    </Router>
  );
}

export default NavBar;
