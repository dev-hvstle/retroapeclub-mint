import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import gidole from '../../fonts/Gidole.otf'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0f1923; 
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};  

    @font-face {
        font-family: gidole;
        src: url({gidole});
    }

`

export const CloseIcon = styled(FaTimes)`
    color: #fff;

`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none; 

`

export const SidebarWrapper = styled.div`
    color: #fff;

`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr; 
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px); 
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    font-family: gidole;
    text-decoration: none;
    position:relative;
    top:20vh;
    color: #fff;
    cursor: pointer;
    
    &:hover{
        color: #01bf71;
        transition: 0.2s ease-in-out; 
    }

`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    padding-bottom: 20vh;
   
`

export const SidebarRoute = styled(LinkR)`
border-radius: 2px;
border:2px solid #0b6591;
background: #1c1131;
white-space: nowrap;
padding: 0px 0px;
color: white;
font-size: 16px;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;  

&:hover{
    
    transition: all 0.2s ease-in-out;
    background: #372659;
    border:2px solid #2facea;
    color: white;
    
}

`

export const ImgLogo = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    width: auto;
    margin-right: 1vw;

    @media screen and (max-width:1024){
        height: 60%;
        
        width: auto;
    }

    @media screen and (max-width: 460px){
        margin-right: 4vw !important;
        height: 30%;
        width: auto;
    }
`;


export const ImgWrap = styled.a`

    
    width: auto;
    height: 10vh;
    cursor: pointer;

   
`

export const SidebarSocials = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

`