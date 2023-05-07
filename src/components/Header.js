import React, { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [open,setOpen]=useState(false)
  const handelClick =()=>{
     setOpen(!open)
  }
  return (
    <Conatiner>
      <Content>
        <Logo>
          <a href="/home">
            <img src="images/home-logo.svg" alt="****" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="images/search-icon.svg" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a>
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavList>
            <User onClick={handelClick}>
              <a>
                <img src="/images/user.svg" alt="" />
                <span >
                  Me
                  <img src="images/down-icon.svg " />
                </span>
              </a>
            </User>

            <Work>
              <a>
                <img src="/images/nav-work.svg" />
                <span>
                  Work
                  <img src="/images/down-icon.svg " />
                </span>
              </a>
            </Work>
            {open ?
            <SignOut>
              <AboutMe>
                <a>
                  <img src="/images/user.svg" alt="" />
                </a>
                <div>
                  <span>Haythem Said </span>
                  <p>full stack Js developer</p>
                </div>
               
              </AboutMe>
              <a href="/home"> 
              <Profil className="border">
                  <span> Voir le Profile </span>
                </Profil>
                </a>
                <Setting>
                 <p style={{fontSize:23  }}>Compte</p>
                 <p>Essayer Premium gratuitement </p>
                 <p>Préférence et confidentialité</p>
                 <p>Aide</p>
                 <p>Langue</p>
                </Setting>
            </SignOut>
 : ('')}
          </NavListWrap>
        </Nav>
      </Content>
    </Conatiner>
  );
};

export default Header;
const Conatiner = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 10px;
  z-index: 100;
  width: 100%;
  height: 80px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto;
  max-width: 1228px;
`;
const Logo = styled.div`
  margin-right: 10px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.5;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;
const SearchIcon = styled.div`
  width: 34px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 8px;
  pointer-events: none;
`;
const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 767px) {
    position: fixed;
    bottom: 0;
    background: white;
    width: 100%;
    justify-content: center;
  }
`;
const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      margin: -1px;
      position: absolute;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;
const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover {
    a {
      span {
        cursor: pointer;
      }
    }
  }
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;
const User = styled(NavList)`
  a > img {
    width: 24px;
    border-radius: 40%;
  }
`;
const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

const SignOut = styled.ul`
  background-color: white;
  position: absolute;
  top: 85px;
  right: 465px;
  width: 290px;
  border-radius: 10px;
`;
const AboutMe = styled.li`
  margin: 7px;
  padding: 10px;
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  border-bottom: 2px solid var(--white, #fff);
  a > img {
    width: 50px;
    border-radius: 40%;
  }
  div > span {
    font-weight: bold;
    margin: 10px;
  }
  p {
    margin: 10px;
  }
`;

const Profil =styled.li`
  list-style-type: none;
  border: solid;
  border-color: blue;
  border-radius: 30px;
  text-align: center;
  margin-right: 35px;
  text-decoration-line: none;  
  padding: 3px;
  .border {
  span:after {
    content: "";
    transform: scaleX(1);
    border-bottom: 2px solid var(--white, #fff);
    bottom: 0;
    left: 0;
    margin: -1px;
    position: absolute;
    width: 100%;
    border-color: rgba(0, 0, 0, 0.9);
  }
}
`;

const Setting=styled.div``

