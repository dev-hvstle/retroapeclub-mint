import React, { useState, Fragment } from 'react'

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


    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 900){
        setColorchange(true);
        }
        else{
        setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <Fragment>
            <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
                <NavbarContainer>
                    <NavLogo to="/">
                    <ImgWrap>
                        
                        <ImgLogo src={opensea} to="/"></ImgLogo>

                    </ImgWrap>

                    <ImgWrap href="https://twitter.com/Retro_Ape_Club" rel="noopener">
                    
                        <ImgLogo src={twitter}></ImgLogo>
                        
                    </ImgWrap>

                    <ImgWrap href="https://discord.gg/retroapeclub" rel="noopener">
                    
                        <ImgLogo src={discord}></ImgLogo>
                        
                    </ImgWrap>
                    </NavLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" className='about'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >ABOUT</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="roadmap" className='roadmap'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >ROADMAP</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="team" className='about'
                            smooth={true}
                            color='#fff'
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >TEAM</NavLinks>
                        </NavItem>

                        <NavItem>
                            
                        
                     
                        </NavItem>
      
                    </NavMenu>
                    <NavBtnContainer>
                    <ButtonWrap>
                             
                            <button className='btnNavbar' onClick={initializeWallet}>{(isInitialized ? sanitizedAddress : account)}</button>
                         
                        </ButtonWrap>
                   
                    </NavBtnContainer>

                </NavbarContainer>
            </Nav>
        </Fragment>
    )
}

export default Navbar;
