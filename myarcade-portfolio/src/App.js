import React, { useState } from 'react';
import './index.css';
import Profile from './components/Profile';
import Levels from './components/Experience'; 
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-[#020617] text-[#00fff7] uppercase overflow-hidden">
      
      {/* HOME SECTION */}
      <section className={`home ${activeSection === 'home' ? 'active' : ''}`}>
        <p className="insert-coin">★ INSERT COIN ★</p>
        <h1 className="text-5xl md:text-7xl mb-4 neon-glow">PLAYER 1</h1>
        <p className="text-sm tracking-[0.3em] mb-10 text-white">IT Student | UI/UX | Developer</p>
        <button onClick={() => setActiveSection('menu')} className="start-btn">
          ▶ START GAME
        </button>
      </section>

      {/* MENU SECTION - FIXED FOR VERTICAL STACKING */}
      <section className={`section menu ${activeSection === 'menu' ? 'active' : ''}`}>
        <button className="back-btn" onClick={() => setActiveSection('home')}>← BACK</button>
        
        <h2 className="text-3xl mb-12 tracking-widest text-white neon-glow">MAIN MENU</h2>
        
        {/* The 'flex-col' and 'space-y-6' ensure buttons stack vertically and don't touch */}
        <ul className="flex flex-col items-center space-y-6 list-none p-0">
          <li>
            <button className="menu-option-btn" onClick={() => setActiveSection('profile')}>
              [ PROFILE ]
            </button>
          </li>
          <li>
            <button className="menu-option-btn" onClick={() => setActiveSection('levels')}>
              [ PROJECTS ]
            </button>
          </li>
          <li>
            <button className="menu-option-btn" onClick={() => setActiveSection('skills')}>
              [ SKILLS ]
            </button>
          </li>
          <li>
            <button className="menu-option-btn" onClick={() => setActiveSection('contact')}>
              [ CONTACT ]
            </button>
          </li>
        </ul>
      </section>

      {/* COMPONENT SECTIONS */}
      <section className={`section ${activeSection === 'profile' ? 'active' : ''}`}>
        <Profile onBack={() => setActiveSection('menu')} />
      </section>

      <section className={`section ${activeSection === 'levels' ? 'active' : ''}`}>
        <Levels onBack={() => setActiveSection('menu')} />
      </section>

      <section className={`section ${activeSection === 'skills' ? 'active' : ''}`}>
        <Skills onBack={() => setActiveSection('menu')} />
      </section>

      <section className={`section ${activeSection === 'contact' ? 'active' : ''}`}>
        <Contact onBack={() => setActiveSection('menu')} />
      </section>

    </div>
  );
}

export default App;