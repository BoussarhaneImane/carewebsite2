import React from 'react';
import "./FirstNav.css";

const FirstNav = () => {
  return (
    <div>
      <div className="bg-pink-900 informational-bar">
        <div className="info">
          <span>📞 +212 6 12 34 56 78</span>
          <span>📍 123 Rue Exemple, Casablanca, Maroc</span>
          <span>
            <a href="" target="_blank" rel="noopener noreferrer">Visitez notre site web</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FirstNav;

