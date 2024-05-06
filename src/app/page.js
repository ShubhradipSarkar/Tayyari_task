"use client"

import QuestionBody from "./components/QuestionBody";
import {
  RecoilRoot,

} from 'recoil';
export default function Home() {
  return (
    <RecoilRoot>
      <div style={{backgroundColor:'white', minHeight:'100vh'}}>
        
        <QuestionBody/>
      </div>
      </RecoilRoot>
      
    
  );
}
