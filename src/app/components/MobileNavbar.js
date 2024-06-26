"use client"
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { pageState } from '../../recoilState';

function MobileNavbar() {
  
  const [page, setPage] = useRecoilState(pageState);
  const [screenWidth, setScreenWidth] = useState(500);

  useEffect(() => {
    
    setScreenWidth(window.innerWidth);

  }, []);

  const isMobileScreen = screenWidth < 700;

  const handlePrevClick = () => {
    if (page >= 1) {
      setPage(page - 1);
    }
  };

  const handleSkipClick = () => {
    if (page < 1) {
      setPage(page + 1);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top:0,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between', 
        padding: '10px',
        zIndex: 1000, 
        backgroundColor: 'white',
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      {isMobileScreen && (
        <button style={buttonStyle} onClick={handlePrevClick}>
          <h3>{'<<'} Previous</h3>
        </button>
      )}

      {isMobileScreen && (
        <button style={buttonStyle} onClick={handleSkipClick}>
          <h3>Skip {'>>'}</h3>
        </button>
      )}
      
    </div>
  );
}

const buttonStyle = {
  padding: '8px 16px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default MobileNavbar;
