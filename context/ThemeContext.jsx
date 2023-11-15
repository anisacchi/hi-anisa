'use client';

import React, { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  isDark: false,
  toggleThemeHandler: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    initialThemeHandler();
  });

  const getThemeInLocalStorage = () => {
    return localStorage.getItem('theme');
  };

  const initialThemeHandler = () => {
    if (getThemeInLocalStorage() === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleThemeHandler = () => {
    if (isDark) {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark: isDark,
        toggleThemeHandler: toggleThemeHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
