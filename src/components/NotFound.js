import React from 'react';
import './NotFound.scss';

function NotFound({ darkMode }) {
  return (
    <div className={`not-found-container ${darkMode ? 'dark-mode' : ''}`}>
      <h1 className="not-found-heading">404 - Not Found</h1>
      <p className="not-found-text">La page que vous recherchez est introuvable.</p>
    </div>
  );
}

export default NotFound;
