"use client"
import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { showAnswerState, drawerState, pageState } from '../../recoilState';
import Footer from './Footer';
import MobileNavbar from './MobileNavbar';
import Image from 'next/image'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const containerStyle = {
  minHeight: 'screen',
  background: 'white',
  padding: '30px',
  display: 'flex'
};

const questionContainerStyle = {
  overflow: 'hidden',
  position: 'relative',
  flex: 1
};

const scrollableStyle = {
  overflow: 'auto',
  maxHeight: '80vh',
  paddingRight: '20px',
  boxSizing: 'content-box',
  marginRight: '-20px'
};

const buttonStyle = {
  height: '50px',
  backgroundColor: 'white',
  color: 'black',
  borderRadius: '10px',
  width: '450px',
  margin: '10px',
  boxShadow: '0px 2px 2px rgba(0, 0, 0, 7)'
};




function QuestionBody({
  searchParams,
}) {
  const showAnswer = useRecoilValue(showAnswerState);
  const drawer = useRecoilValue(drawerState);
  const pageNumber = useRecoilValue(pageState);
  console.log('page number = ', pageNumber);
  const [questions, setQuestions] = useState([]);
  const [ticked, setticked] = useState(false);
  const [selectedOption, setselectedOption] = useState(0);
  const [mark, setmark] = useState(0);
  const questionRef = useRef(null);
  const answerRef = useRef(null);
  
  const [screenWidth, setScreenWidth] = useState();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Fetch questions from API
    axios.get('/api/users/getQuestion')
      .then(response => {
        setQuestions(response.data.Questions);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  }, []);

  useEffect(() => {
    if (showAnswer) {
      answerRef.current.scrollTop = questionRef.current.scrollTop;
    }
  }, [showAnswer, drawer]);

  

  const justifyAnswer=(option, answer, pageNumber)=>{
    setticked(true);
    setmark(pageNumber);
    setselectedOption(option);
    if(option === answer){
      console.log('correct')
      
    }
    else{
      console.log('incorrect answer')
    }
  }

  

  return (
    <div>
      {screenWidth<700 && <MobileNavbar/>}
    <div style={{...containerStyle, paddingTop: '50px'}}>
      
      <div style={questionContainerStyle}>
        <div style={{ ...scrollableStyle, marginRight: '-20px' }} ref={questionRef}>
          {console.log(questions[pageNumber])} {/* Log the question for the current page */}
          {questions[pageNumber] && (
            <div>
              <h1 style={{ color: 'black' }}>Question {pageNumber + 1} <BookmarkBorderOutlinedIcon/></h1>
              <p style={{ color: 'black', margin: '20px' }}>{questions[pageNumber].question}</p>
              <Image src={questions[pageNumber].question_img} width={300} height={300} alt={'question 1'}/>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {questions[pageNumber].options.map(option => (
                  <button key={option}  style={{height: '50px',
                  backgroundColor: ticked && option=== questions[pageNumber].answer && mark===pageNumber ?'green':(ticked && option !== questions[pageNumber].answer && selectedOption===option)  && mark===pageNumber ? 'red' : 'white',
                  color: 'black',
                  borderRadius: '10px',
                  minWidth: '250px',
                  width: '35%',
                  margin: '10px',
                  boxShadow: '0px 2px 2px rgba(0, 0, 0, 7)'}}  onClick={()=>justifyAnswer(option, questions[pageNumber].answer, pageNumber)}>{option}</button>
                ))}
                
              </div>
              <Footer ans={questions[pageNumber].answer} ansImg={questions[pageNumber].answer_img}/>
            </div>
            
          )}
          
        </div>
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '20px', background: 'white', pointerEvents: 'none' }}></div>
      </div>
      
    </div>
    </div>
  );
}

export default QuestionBody;
