import React from "react";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  ImgLogo,
  ImgSocialLogo,
} from "./FooterElements";

import retro from "../../Image/retro.png";

import discord from "../../Image/discord.png";
import twitter from "../../Image/twitter.png";
import opensea from "../../Image/opensea.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer></FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              <ImgLogo src={retro}></ImgLogo>
            </SocialLogo>
            <WebsiteRights>
              Retro Ape Club © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>

            <SocialIcons>
              <SocialIconLink
                href="https://discord.gg/retroapeclub"
                target="_blank"
                aria-label="Discord"
              >
                <ImgSocialLogo src={discord}></ImgSocialLogo>
              </SocialIconLink>

              <SocialIconLink
                href="https://twitter.com/Retro_Ape_Club"
                target="_blank"
                aria-label="Twitter"
              >
                <ImgSocialLogo src={twitter}></ImgSocialLogo>
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Opensea">
                <ImgSocialLogo src={opensea}></ImgSocialLogo>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
