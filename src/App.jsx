import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import IndarDecoDetails from './components/IndarDecoDetails'; // Import the new page

function AppContent() {
  const location = useLocation(); // Get current route

  return (
    <div className="bg-black">
      {/* Show NavBar only if NOT on Indar Deco Details Page */}
      {location.pathname !== "/indar-deco-details" && <NavBar />}

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Projects />
              <Footer />
            </>
          }
        />
        
        {/* Indar Deco Details Page */}
        <Route path="/indar-deco-details" element={<IndarDecoDetails />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;


{/* <nav className='relative container mx-auto p-6 bg-red-500'>
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src='src\assets\images\logooooooblanc.png' className="w-32 h-32"/>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href='#'>Accueil</a>
          <a href='#'>Services</a>
          <a href='#'>Projets</a>
          <a href='#'>Équipe</a>
          <a href='#'>À propos de nous</a> 
        </div>
      </div>
    </nav> */}
