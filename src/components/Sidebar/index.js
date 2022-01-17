import React from 'react'
import {SidebarContainer, Icon, CloseIcon, 
    SidebarWrapper, SidebarMenu, SidebarLink, 
    SideBtnWrap, 
    SidebarRoute,
    ImgWrap,
    SidebarSocials,
    ImgLogo
} from './SidebarElements';

import './SidebarElements.css';
import opensea from '../../Image/opensea.png'
import twitter from '../../Image/twitter.png'
import discord from '../../Image/discord.png'
import fb from '../../Image/fb.png'
import Logo from '../../Image/retro.png';


export const Sidebar = ({isOpen, toggle, account, initializeWallet, isInitialized}) => {

    const patt = /^[a-zA-Z0-9]{10}/;
    const sanitizedAddress = account.match(patt);

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                
                <SidebarMenu>
                    <SidebarLink onClick={toggle}
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    >ABOUT</SidebarLink>
                    <SidebarLink onClick={toggle}
                    to="roadmap"
                    smooth={true}
                    duration={500}
                    spy={true}
                    >ROADMAP</SidebarLink>
                    <SidebarLink onClick={toggle}
                    to="team"
                    smooth={true}
                    duration={500}
                    spy={true}
                    >TEAMS</SidebarLink>
                </SidebarMenu>


                <SideBtnWrap>

                <button className="btnConnect" onClick={initializeWallet}>
                    {(isInitialized ? sanitizedAddress : account)}</button>

                </SideBtnWrap>

                    <SidebarSocials>

                    <ImgWrap>
                        
                        <ImgLogo src={opensea} to="/"></ImgLogo>

                    </ImgWrap>

                    <ImgWrap>
                    
                        <ImgLogo src={twitter} to="/"></ImgLogo>
                        
                    </ImgWrap>

                    <ImgWrap>
                    
                        <ImgLogo src={discord} to="/"></ImgLogo>
                        
                    </ImgWrap>

                 

                    </SidebarSocials>
                   
               


                

          
                

            </SidebarWrapper>

        </SidebarContainer>
    )
}


export default Sidebar;