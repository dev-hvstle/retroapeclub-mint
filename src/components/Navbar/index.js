import React, { useState, Fragment } from "react";

import { FaBars } from "react-icons/fa";
import "./NavbarElements.css";
import opensea from "../../Image/opensea.png";
import twitter from "../../Image/twitter.png";
import discord from "../../Image/discord.png";

import Logo from "../../Image/apesftw.png";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  ImgLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  ImgLogoRetro,
  NavBtn,
  RetroLogo,
  ImgWrap,
  ButtonWrap,
  NavBtnContainer,
  imgBtn,
} from "./NavbarElements";

const Navbar = ({ toggle, initializeWallet, isInitialized, account }) => {
  const patt = /^[a-zA-Z0-9]{10}/;
  const sanitizedAddress = account.match(patt);

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <Fragment>
      <Nav className={colorChange ? "navbar colorChange" : "navbar"}>
        <NavbarContainer>
          <NavLogo to="/">
            <ImgLogoRetro src={Logo} />
          </NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu></NavMenu>
          <NavBtnContainer>
            <ImgWrap>
              <ImgLogo src={opensea} to="/"></ImgLogo>
            </ImgWrap>

            <ImgWrap
              href="https://twitter.com/ApesFTWOfficial"
              rel="noopener"
              target="_blank"
            >
              <ImgLogo src={twitter}></ImgLogo>
            </ImgWrap>
            {/* 
            <ImgWrap href="https://discord.gg/retroapeclub" rel="noopener">
              <ImgLogo src={discord}></ImgLogo>
            </ImgWrap> */}
            <ButtonWrap>
              <button className="btnNavbar" onClick={initializeWallet}>
                {isInitialized ? sanitizedAddress : account}
              </button>
            </ButtonWrap>
          </NavBtnContainer>
        </NavbarContainer>
      </Nav>
    </Fragment>
  );
};

export default Navbar;
