import React, { useEffect, useState, createContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Search from '../Pages/Search';
import Edit from '../Pages/Edit';
import Detail from '../Pages/Detail';

import { ADD, DETAIL, EDIT, HOME, SEARCH } from '../routes';

export const ThemeContext = createContext(false);
const { Provider: ThemeProvider } = ThemeContext;

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) ?? []);
  const [isNotesInitialised, setIsNotesInitialised] = useState(false);

  const themeQuery = window.matchMedia('(prefers-color-scheme: light)');
  const { matches } = themeQuery;

  useEffect(() => {
    if (isNotesInitialised) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }

    setIsNotesInitialised(true);
  }, [notes]);

  useEffect(() => {
    if (matches) {
      document.body.classList.add('body_light');
    }
  }, [matches]);

  return (
    <ThemeProvider value={matches}>
      <BrowserRouter>
        <Switch>
          <Route exact path={HOME}>
            <Home notes={notes} setNotes={setNotes} />
          </Route>
          <Route path={SEARCH}>
            <Search notes={notes} setNotes={setNotes} />
          </Route>
          <Route path={ADD}>
            <Edit setNotes={setNotes} />
          </Route>
          <Route exact path={DETAIL}>
            <Detail notes={notes} />
          </Route>
          <Route path={EDIT}>
            <Edit setNotes={setNotes} notes={notes} />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
