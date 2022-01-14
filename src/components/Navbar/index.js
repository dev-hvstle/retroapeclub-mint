import React from 'react'
import logo from '../../Image/retroapeclub.png';
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
    NavBtnContainer
    

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
                            <NavLinks to="about">ABOUT</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">ROADMAP</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">TEAMS</NavLinks>
                        </NavItem>
      
                    </NavMenu>
                    <NavBtnContainer>
                        <ImgWrap>
                        
                            <ImgLogo src={opensea} to="/"></ImgLogo>

                        </ImgWrap>

                        <ImgWrap>
                        
                            <ImgLogo src={twitter} to="/"></ImgLogo>
                            
                        </ImgWrap>

                        <ImgWrap>
                        
                            <ImgLogo src={discord} to="/"></ImgLogo>
                            
                        </ImgWrap>
                        
                        <ButtonWrap>
                            <button className="btnMint"  onClick={initializeWallet}>{(isInitialized ? sanitizedAddress : account)}</button>
                        </ButtonWrap>
                        
                    </NavBtnContainer>

                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
