'use client';

import React, { createContext, useEffect, useState } from 'react';

type ThemeContextProps = {
  isDark: boolean;
  toggleThemeHandler: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  isDark: false,
  toggleThemeHandler: () => {},
});

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [isDark, setIsDark] = useState<boolean>(false);

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
    <ThemeContext.Provider value={{ isDark, toggleThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};
