import React from 'react';
import './App.css';

import {
  Home, About, Privacy, Terms, Cookies, Return, Disclaimer, AcceptableUse, Eula, 
  GetStarted, SeatingArrangement, PrivacyArticle, Guide
} from './container';

import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes basename="/smg-website-official">
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/> 
        <Route path="/privacy" element={<Privacy/>}/> 
        <Route path="/terms" element={<Terms/>}/> 
        <Route path="/cookies" element={<Cookies/>}/> 
        <Route path="/return" element={<Return/>}/> 
        <Route path="/disclaimer" element={<Disclaimer/>}/> 
        <Route path="/acceptableuse" element={<AcceptableUse/>}/> 
        <Route path="/eula" element={<Eula />}/> 
        <Route path="/getstarted" element={<GetStarted />}/> 
        <Route path="/articles/seatingarrangement" element={<SeatingArrangement />}/> 
        <Route path="/articles/privacy" element={<PrivacyArticle />}/> 
        <Route path="/pages/guide" element={<Guide />}/> 
      </Routes>
    </div>
  );
}

export default App;
