/* eslint-idsable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['코트 추천', '셔츠 추천']); 
  let [글제목2, 글제목변경2] = useState('아우터 추천'); 
  let [글제목3, 글제목변경3] = useState('하의 추천'); 
  let [글제목4, 글제목변경4] = useState('안경 추천'); 
  let [따봉, 따봉변경] = useState(0);
  

  let post = '강남 고기 맛집';
  return (
    <div className="App">
       <div className="black-nav">
         <div>개발 blog</div>
       </div>
       <div className="list">
          <h4> { 글제목[1] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> {따봉} </h4> 
            <p>7월 28일</p>
           <hr/>
       </div>
       <div className="list">
          <h4>  { 글제목2 } </h4> 
           <p>7월 28일</p>
           <hr/>
       </div>
       <div className="list">
          <h4> { 글제목3 } </h4> 
           <p>7월 28일</p>
           <hr/>
       </div>
       <div className="list">
          <h4> { 글제목4 } </h4> 
           <p>7월 28일</p>
           <hr/>
       </div>
    </div>
  );
}

export default App;
