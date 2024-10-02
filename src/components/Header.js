import React from 'react';
import netflixLogo from '../assets/Images/netflix-logo.png';
import Account1 from '../assets/Images/Account1.png';

// Header Component
function Header({ navItems }) {
  return (
    <div>
      <nav className="nav" id="nav">
        {/* Left side */}
        <div className="nav-left">
          <img className="nav_logo " src={netflixLogo} alt="Netflix Logo" />
          <div className="nav-links">
            {/* Dynamically generating navigation items */}
            {navItems.map((item, index) => (
              <a key={index} href={item.link} className="nav-item" id={`A${index + 1}`}>
                {item.nav}
              </a>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="nav-right">
          <i className="fas fa-search nav-icon" id="searchIcon"></i>
          <i className="fas fa-bell nav-icon"></i>
          <img className="nav_logo" src={Account1} alt="User Avatar" />
        </div>
      </nav>
    </div>
  );
}

// App Component
export default function App() {
  const navItems = [
    // {nav :'A',link:'#' },
    { nav: 'Home', link: '#' },
   
    { nav: 'Tv shows', link: '#' },
    { nav: 'Movies', link: '#' },
    { nav: 'News and popular', link: '#' },
    { nav: 'My list', link: '#' },
    { nav: 'Browse by Languages', link: '#' },
  ];

  return <Header navItems={navItems} />;
}
