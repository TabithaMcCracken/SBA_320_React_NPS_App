import React from 'react';

const NavigationBar = ({ onViewChange, view }) => (
    <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: '#8A3240', color: '#E4D7CF', padding: '10px 20px' }}>
    <button className="button-class" onClick={() => onViewChange(view === 'main' ? 'favorites' : 'main')}>
      {view === 'main' ? 'See Favorites' : 'Back to Main Page'}
    </button>
  </nav>
);

export default NavigationBar;
