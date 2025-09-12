import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { localStorageKey, getLanguageFromHostname } from '../i18n';
import './LanguageSelector.css';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const storedLanguage = localStorage.getItem(localStorageKey);

    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    } else {

      const defaultLanguage = getLanguageFromHostname(window.location.hostname);
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
    <div className="grid grid-cols-1">
      <select
        id="language"
        name="language"
        defaultValue="no"
        className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-smg_orange sm:text-sm/6"
        onChange={handleLanguageChange} value={i18n.language}
      >
        <option value="no">🇳🇴</option>
        <option value="en">🇬🇧</option>
      </select>
      <ChevronDownIcon
        aria-hidden="true"
        className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
      />
    </div>
  );
};

export default LanguageSelector;
