import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Search from '../Pages/Search';
import Edit from '../Pages/Edit';
import Detail from '../Pages/Detail';

import { ADD, DETAIL, EDIT, HOME, SEARCH } from '../routes';
import { useSaveItems, ThemeProvider, useCreateTheme } from '../hooks';

const App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) ?? []);

  const isLight = useCreateTheme();

  useSaveItems(notes);

  return (
    <ThemeProvider value={isLight}>
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
