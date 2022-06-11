import React from "react";

import {
  CopyRight,
  FooterContainer,
  FooterContent,
  FooterLogo,
  OpenSea,
  SocialLinks,
  SocialLinksContainer,
  Twitter,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo></FooterLogo>
        <CopyRight></CopyRight>
        <SocialLinksContainer>
          <SocialLinks>
            <OpenSea></OpenSea>
            <Twitter></Twitter>
          </SocialLinks>
        </SocialLinksContainer>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
