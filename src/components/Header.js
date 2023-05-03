import React from "react";
import styled from "styled-components";
import { AiFillHome, AiOutlineMenu ,AiOutlineSearch} from "react-icons/ai";
import {BsPersonPlusFill} from 'react-icons/bs'
import {IoIosSchool} from 'react-icons/io'
import {RiMessage2Fill} from 'react-icons/ri'
import {MdNotificationsActive} from 'react-icons/md'
import {BsPersonCircle} from 'react-icons/bs'
const Header = () => {
  return (
    <Conatiner>
      <MenuLeft>
        <a href="/home">
        <img className="logo" src="images/LinkedIn_logo.webp" />
        </a>
        <Search>
        <AiOutlineSearch />
        <InputSearch type="text" placeholder="Search"></InputSearch>
        </Search>
      </MenuLeft>
      <Menu>
        <AiFillHome className="iconHome"  />
        
        <BsPersonPlusFill className="iconHome" />

        <IoIosSchool className="iconHome" />

        <RiMessage2Fill className="iconHome" />

        <MdNotificationsActive className="iconHome" />

        <BsPersonCircle className="iconHome" />

      </Menu>
      <MenuRight>
        <AiOutlineMenu className="iconHome" />
      </MenuRight>
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
  justify-content: space-around;
`;
const MenuLeft = styled.div`
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
const Menu = styled.div`
  padding: 30px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const MenuRight = styled.div`
  margin: 100px;
`;
const Search=styled.div`
z-index:10`