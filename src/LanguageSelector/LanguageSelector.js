import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { localStorageKey } from '../i18n';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem(localStorageKey);

    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    } else {

      const defaultLanguage = 'no'; 
      i18n.changeLanguage(defaultLanguage);
      localStorage.setItem(localStorageKey, defaultLanguage);
    }
  }, [i18n]);

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
