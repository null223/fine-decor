import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle, { theme } from '../Style';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import store from '../store';


export const AppProvider = ({children}) => pug`
  ReduxProvider(store=store)
    ThemeProvider(theme=theme)
      GlobalStyle
      Router
        ${children}
`;

export default AppProvider;
