// Footer.js
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { showAnswerState, drawerState, pageState } from '../../recoilState';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const optionbuttonStyle = {
    height: '50px',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '10px',
    minWidth: '250px',
    width: '35%',
    margin: '10px',
    boxShadow: '0px 2px 2px rgba(0, 0, 0, 7)'
  };
  
function Footer({ ans, ansImg }) {
  const [showAnswer, setShowAnswer] = useRecoilState(showAnswerState);
  const [drawer, setDrawer] = useRecoilState(drawerState);
  const [page, setPage] = useRecoilState(pageState);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobileScreen = screenWidth < 700;

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 'auto', margin:'10px'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{ margin: '10px' }}>
        <CloseIcon onClick={toggleDrawer('right', false)} />
      </div>
      <h3>Correct Option</h3>
      <button style={optionbuttonStyle}>{ans}</button>
      
      <h3>Solution</h3>
      <Image src={ansImg} alt='solution1' width={300} height={300}/>
      
    </Box>
  );
  const handleShowAnswer = () => {
    toggleDrawer('right', true);
    setShowAnswer(!showAnswer);
    setDrawer(!drawer);
  };

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: '#f0f0f0',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px 0',
        borderTop: '1px solid #ccc',
      }}
    >
      <React.Fragment key={'right'}>
        {isMobileScreen ? null : (
          <button style={buttonStyle} onClick={() => { page >= 1 && setPage(page - 1) }}>
            <h3>{'<<'} Previous</h3>
          </button>
        )}
        <button style={buttonStyle}>Submit Answer</button>
        <button style={buttonStyle} onClick={toggleDrawer('right', true)}>
          Show Answer
        </button>
        {isMobileScreen ? null : (
          <button style={buttonStyle} onClick={() => { page < 1 && setPage(page + 1) }}>
            <h3>Skip {'>>'}</h3>
          </button>
        )}
        <SwipeableDrawer
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer('right', false)}
          onOpen={toggleDrawer('right', true)}
        >
          {list('right')}
        </SwipeableDrawer>
      </React.Fragment>
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

export default Footer;
