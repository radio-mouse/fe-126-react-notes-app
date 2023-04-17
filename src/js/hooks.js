import { useState, useEffect, createContext } from 'react';

export const ThemeContext = createContext(false);
export const { Provider: ThemeProvider } = ThemeContext;

export const useSaveItems = (notes) => {
  const [isNotesInitialised, setIsNotesInitialised] = useState(false);

  useEffect(() => {
    if (isNotesInitialised) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }

    setIsNotesInitialised(true);
  }, [notes]);
};

export const useCreateTheme = () => {
  const themeQuery = window.matchMedia('(prefers-color-scheme: light)');
  const { matches } = themeQuery;

  useEffect(() => {
    if (matches) {
      document.body.classList.add('body_light');
    }
  }, [matches]);

  return matches;
};
