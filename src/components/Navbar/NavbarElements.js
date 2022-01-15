import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';
import pirulen from '../../fonts/batman.ttf'
import gidole from '../../fonts/Gidole.otf'


export const Nav = styled.nav`
    background: #0f1923;
    height: 80px;
    /* margin-top: --80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    letter-spacing: .2vh;

    @font-face {
    font-family: 'fofbb';
    src: url(${pirulen});
    }   

    @font-face {
        font-family: gidole;
        src: url(${gidole});
    }
    
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 0;
    max-width: 1100px;

`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2vh;
    display: flex;
    align-items: center;
    margin-left: 0px;
    font-weight: bold;
    text-decoration: none;
`;

export const ImgLogo = styled.img`
   
    height: 80%;
    width: auto;
    margin-right: 1vw;

    @media screen and (max-width:1024){
        height: 40%;
        
        width: auto;
    }

    @media screen and (max-width: 460px){
        margin-right: 4vw !important;
        height: 20%;
        width: auto;
    }
`;

export const RetroLogo = styled.img`
   
    height: 10vh;
    width: auto;
    margin-right: 1vw;
    margin-left: -5vw;

    @media screen and (max-width: 1334px){
      
        margin-left: 0vw;

    }

    @media screen and (max-width:1024px){
        height: 10vw;
        margin-left: 0vw;
        width: auto;
    }

    @media screen and (max-width: 460px){
        margin-right: 4vw !important;
        height: 8vh;
        width: auto;
    }
`;


export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 1334px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }

    @media screen and (max-width: 1024px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`


export const NavMenu = styled.ul`

    display: flex;
    align-items: right;
    list-style: none;
    text-align: center;
    margin-left: 50vh;
    padding-right: 5vh;
    font-family: gidole;

    @media screen and (max-width: 1334px){
        display: none;
    }

    @media screen and (max-width: 1024px){
        display: none;
    }

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
    font-size: 1.5vh;
    height: 80px;
    font-family: gidole;
    

`;

export const NavLinks = styled(LinkS)`

    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: gidole;    
    

    &.active{
        border-bottom: 3px solid #01bf71;
    }
`;


export const NavBtnContainer = styled.nav`
    display: flex;
    align-items: center;



    @media screen and (max-width: 1334px){
        display: none;
    }

    @media screen and (max-width: 1024px){
        display: none;
    }

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtn = styled.button`
    border-radius: 2px;
    border:2px solid #b55062;
    background: #0f1923;
    white-space: nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;  

    &:hover{
        
        transition: all 0.2s ease-in-out;
        background: #0f1923;
        border:2px solid #b55062;
        color: white;
        
    }
`

export const ButtonWrap = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 5vh;
    height: 5%;

    @media screen and (max-width: 1024px){
        padding-right: 2vh;
    }

    @media screen and (max-width: 768px){
        padding-right: 2vh;
        height: 5%;
        width: 50vw;
    }
    
   
`

export const ImgWrap = styled.image`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    height: 5vh;
    cursor: pointer;

   
  
   
`


