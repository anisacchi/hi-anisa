'use client';

import React, { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  isDarkTheme: false,
  toggleThemeHandler: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => initialThemeHandler());

  const getThemeInLocalStorage = () => {
    return localStorage.getItem('theme');
  };

  const initialThemeHandler = () => {
    if (getThemeInLocalStorage() === 'dark') {
      setIsDarkTheme(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkTheme(false);
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleThemeHandler = () => {
    if (isDarkTheme) {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme: isDarkTheme,
        toggleThemeHandler: toggleThemeHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
