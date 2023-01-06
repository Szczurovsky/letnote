import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {WebPage} from './components/WebPage/WebPage';
function App() {
  const [welcomePage, useWelcomePage] = useState(true);
  return (
    <>
       <WebPage />
    </>
  );
}

export default App;
