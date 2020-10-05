import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Search from "./Search";

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <h1> &#60; Movies DataBase &#62; </h1>
      </Link>
      <Search />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #373b69;
  padding: 20px;
  a {
    text-decoration: none;
    color: white;
    margin-right: 60px;
  }
`;
