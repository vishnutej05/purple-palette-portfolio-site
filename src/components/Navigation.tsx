
import React from 'react';

const Navigation = () => {
  const navItems = ['Home', 'About', 'Service', 'Resume', 'Project', 'Contact'];

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
      <div className="bg-custom-black/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-2xl">
        <ul className="flex items-center space-x-8">
          {navItems.map((item, index) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`
                  px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105
                  ${index === 0 
                    ? 'bg-custom-purple text-custom-black shadow-lg' 
                    : 'text-custom-white hover:bg-custom-purple/20 hover:text-custom-purple'
                  }
                `}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
