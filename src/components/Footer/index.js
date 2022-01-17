import React from 'react'

import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin,
    FaDiscord
} from 'react-icons/fa'

import { FooterContainer,FooterWrap,
        FooterLinksContainer,FooterLinksWrapper, FooterLinkItems,
        FooterLinkTitle, FooterLink, SocialMedia,
        SocialMediaWrap, SocialLogo,
        WebsiteRights, SocialIcons,
        SocialIconLink
} from './FooterElements'



const Footer = () => {
    return (
        <Footer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to="sign">How it works</FooterLink>
                                <FooterLink to="sign">Testimonials</FooterLink>
                                <FooterLink to="sign">Careers</FooterLink>
                                <FooterLink to="sign">Investors</FooterLink>
                                <FooterLink to="sign">Terms of Service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to="sign">How it works</FooterLink>
                                <FooterLink to="sign">Testimonials</FooterLink>
                                <FooterLink to="sign">Careers</FooterLink>
                                <FooterLink to="sign">Investors</FooterLink>
                                <FooterLink to="sign">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/'>
                                dolla
                            </SocialLogo>
                            <WebsiteRights>Dolla © {new Date().getFullYear()} All rights reserved.</WebsiteRights>

                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" 
                                aria-label="Discord">
                                    <FaFacebook />
                                </SocialIconLink>

                                <SocialIconLink href="/" target="_blank" 
                                aria-label="Twitter">
                                    <FaFacebook />
                                </SocialIconLink>

                                <SocialIconLink href="/" target="_blank" 
                                aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>

                 
                </FooterLinksContainer>
            </FooterWrap>
        </Footer>
    )
}

export default Footer
