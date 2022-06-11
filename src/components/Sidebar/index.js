import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  ImgWrap,
  SidebarSocials,
  ImgLogo,
} from "./SidebarElements";

import "./SidebarElements.css";
import opensea from "../../Image/Opensea.png";
import twitter from "../../Image/Twitter.png";
import discord from "../../Image/discord.png";
import fb from "../../Image/fb.png";
import Logo from "../../Image/retro.png";

const Sidebar = ({
  isOpen,
  toggle,
  account,
  initializeWallet,
  isInitialized,
}) => {
  const patt = /^[a-zA-Z0-9]{10}/;
  const sanitizedAddress = account.match(patt);

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu></SidebarMenu>
        <SidebarSocials>
          <ImgWrap>
            <ImgLogo src={opensea}></ImgLogo>
          </ImgWrap>

          <ImgWrap href="https://twitter.com/Retro_Ape_Club" rel="noopener">
            <ImgLogo src={twitter}></ImgLogo>
          </ImgWrap>
        </SidebarSocials>

        <SideBtnWrap>
          <button className="btnNavbar" onClick={initializeWallet}>
            {isInitialized ? sanitizedAddress : account}
          </button>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
