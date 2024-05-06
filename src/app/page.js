"use client"
import Image from "next/image";
import styles from "./page.module.css";
import QuestionBody from "./components/QuestionBody";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
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
