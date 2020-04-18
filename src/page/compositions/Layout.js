import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => pug`
  .wrapper
    Header
    main
      ${children}
    Footer
`;
export default Layout;
