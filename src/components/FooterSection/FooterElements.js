import styled from 'styled-components'
import {Link} from 'react-router-dom'
import gidole from '../../fonts/Gidole.otf'

export const FooterContainer = styled.footer`
    position: relative;
    top:100vh;
    z-index: 100;
    background-color: #101522;

    @font-face {
        font-family: gidole;
        src: url({gidole});
    }

    @media screen and (max-width:1770px){
        top:88vh;
    }

    @media screen and (max-width:1020px){
        top:235vh;
    }


    @media screen and (max-width:768px){
        top:235vh;
        padding-bottom: 5vh;
    }


    @media screen and (max-width:540px){
        top:300vh;
     
    }

    @media screen and (max-width:468px){
        top:300vh;
    }

    @media screen and (max-width:375px){
        top:290vh;
    }
`

export const FooterWrap = styled.div`

    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;

`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width:820px){
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width:820px){
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;
    

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }

`

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
    font-family: gidole;
`

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    font-family: gidole;

    &:hover{
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
    height: 100;
    
`

export const ImgLogo = styled.img`
   
    height: 15vh;
 
    margin-right: 1vw;

    @media screen and (max-width:1024){
        height: 15vh;
        
        width: auto;
    }

    @media screen and (max-width: 460px){
        margin-right: 4vw !important;
        height: 15vh;
        width: auto;
    }
`;

export const ImgSocialLogo = styled.img`

    height: 10vh;
    padding-top: 3vh;

`

export const SocialMediaWrap = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

export const WebsiteRights = styled.small`
    font-family: gidole;
    font-size: 2vh;
    color: #fff;
    margin-bottom: 16px;

`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`

    color: #fff;
    font-size: 24px;
`

