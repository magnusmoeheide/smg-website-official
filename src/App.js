import React, { useEffect } from 'react';
import { AuthProvider } from './contexts/authContext.js';
import './App.css';

import {
  Home, About, Privacy, Terms, Cookies, Return, Disclaimer, AcceptableUse, Eula,
  GetStarted, SeatingArrangement, PrivacyArticle, Guide, PricingDetail,
} from './container';

import { Routes, Route } from 'react-router-dom';
import { NotificationProvider } from './contexts/NotificationContext.js';
import NotificationContainer from './components/NotificationContainer.jsx';
import { ApiNotificationListener } from './components/ApiNotificationListener.jsx';

function App() {

  useEffect(() => {
    if (window.location.hash) {
      // Remove the '#' symbol
      const id = window.location.hash.substring(1);
      // Find the element with the id
      const element = document.getElementById(id);
      if (element) {
        // Scroll smoothly to the element
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <AuthProvider>
      <NotificationProvider>
        <div className="App">
          <Routes basename="/smg-website-official">
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/return" element={<Return />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/acceptableuse" element={<AcceptableUse />} />
            <Route path="/eula" element={<Eula />} />
            <Route path="/getstarted" element={<GetStarted />} />
            <Route path="/articles/seatingarrangement" element={<SeatingArrangement />} />
            <Route path="/articles/privacy" element={<PrivacyArticle />} />
            <Route path="/pages/guide" element={<Guide />} />
            <Route path="/pricing/:slug" element={<PricingDetail />} />
          </Routes>
        </div>
        <NotificationContainer />
        <ApiNotificationListener />
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
