/* eslint-idsable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['코트 추천', '셔츠 추천', '아우터 추천', '신발추천']); 
  let [따봉, 따봉변경] = useState(0); 
  let post = '강남 고기 맛집';
  
  function 제목변경(){
    var newArray = [ ...글제목];
    newArray[0] = '셋업 추천';
    글제목변경( newArray );
  }


  return (
    <div className="App">
       <div className="black-nav">
         <div>개발 blog</div>
       </div>
       <div className="list">
          <h4> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> {따봉} </h4> 
            <p>7월 28일</p>
           <hr/>
       </div>
       <div className="list">
          <h4> <button onClick= {  제목변경  }> 🎁 </button> { 글제목[1] } </h4> 
           <p>7월 28일</p>
           <hr/>
       </div>
       <div className="list">
          <h4> { 글제목[2] } </h4> 
           <p>7월 28일</p>
           <hr/>
       </div>
       <div className="list">
          <h4> { 글제목[3] } </h4> 
           <p>7월 28일</p>
           <hr/>
       </div>
    </div>
  );
}

export default App;
