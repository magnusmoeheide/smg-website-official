// LanguageSelector.js

import React from 'react';
import { useTranslation } from 'react-i18next';
import { localStorageKey } from '../i18n';
import './LanguageSelector.css'

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    localStorage.setItem(localStorageKey, newLanguage);
  };

  return (
    <div className="languageDiv">
      <select onChange={handleLanguageChange} value={i18n.language} className="languageSelect">
        <option value="no">🇳🇴</option>
        <option value="en">🇬🇧</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
