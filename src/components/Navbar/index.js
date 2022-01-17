import React from 'react'

import {FaBars} from 'react-icons/fa' 
import './NavbarElements.css';
import opensea from '../../Image/opensea.png'
import twitter from '../../Image/twitter.png'
import discord from '../../Image/discord.png'

import Logo from '../../Image/retro.png';


import {
    Nav, 
    NavbarContainer, 
    NavLogo,
    ImgLogo, 
    MobileIcon, 
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    RetroLogo,
    ImgWrap,
    ButtonWrap,
    NavBtnContainer,
    imgBtn
    

} from './NavbarElements';



const Navbar = ({ toggle,initializeWallet, isInitialized, account }) => {

    const patt = /^[a-zA-Z0-9]{10}/;
    const sanitizedAddress = account.match(patt);

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <RetroLogo src={Logo}></RetroLogo>
                    </NavLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            >ABOUT</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="roadmap"
                            smooth={true}
                            duration={500}
                            spy={true}
                            >ROADMAP</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="team"
                            smooth={true}
                            duration={500}
                            spy={true}>TEAM</NavLinks>
                        </NavItem>
      
                    </NavMenu>
                    <NavBtnContainer>
                        <ImgWrap>
                        
                            <ImgLogo src={opensea} to="/"></ImgLogo>

                        </ImgWrap>

                        <ImgWrap href="https://twitter.com/Retro_Ape_Club" rel="noopener">
                        
                            <ImgLogo src={twitter}></ImgLogo>
                            
                        </ImgWrap>

                        <ImgWrap href="https://discord.gg/SwVvNY8ru4" rel="noopener">
                        
                            <ImgLogo src={discord}></ImgLogo>
                            
                        </ImgWrap>
                   
                        <ButtonWrap>
                         
                            
                            <button className='btnConnect' onClick={initializeWallet}>{(isInitialized ? sanitizedAddress : account)}</button>
                            
                        </ButtonWrap>
                        
                    </NavBtnContainer>

                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
