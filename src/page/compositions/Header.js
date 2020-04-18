import React from 'react';
import styled from 'styled-components';

const Header = () => pug`
  StyledHeader
    h1 header
`;

export default Header;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0; right: 0;
`;