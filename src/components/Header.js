import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Conatiner>
      <a>
        <img className="logo" src="images/LinkedIn_logo.webp" />
      </a>
      <InputSearch type="text" placeholder="Recherche"></InputSearch>
    </Conatiner>
  );
};

export default Header;
const Conatiner = styled.div`
  background-color: #fff;
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
`;
const InputSearch = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 300px;
  max-width: 500px;
  height: 40px;
  box-sizing: border-box;
`;
