import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  

  let post = '강남 고기 맛집';
  return (
    <div className="App">
       <div className="black-nav">
         <div>개발 blog</div>
       </div>
       <div className="list">
          <h4> {post } </h4> 
           <p>7월 28일</p>
           <hr/>
       </div>
    </div>
  );
}

export default App;
