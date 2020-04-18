import React from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';

import AppProvider from './compositions/AppProvider';
import { Top } from './pages/index';

const App = () => {
  const hoge = pug`
    AppProvider
      Routes
        Route(path="/" element=Top)
  `;
  console.log(hoge)
  return hoge
};


export default App;
