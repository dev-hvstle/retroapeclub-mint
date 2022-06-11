import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import pirulen from "../../fonts/roadrage.otf";

import tom from "../../fonts/Tomorrow-Light.ttf";

export const Nav = styled.nav`
  background: trans;
  height: 80px;
  /* margin-top: --80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 10;
  letter-spacing: 0.2vh;
  width: 100%;

  @font-face {
    font-family: "fofbb";
    src: url(${pirulen});
  }

  @font-face {
    font-family: tom;
    src: url(${tom});
  }

  @media screen and (max-width: 960px) {
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
  max-width: 1600px;

  @media screen and (max-width: 1820px) {
    max-width: 1300px;
  }
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

  @media screen and (max-width: 1024) {
    height: 40%;
    width: auto;
  }

  @media screen and (max-width: 460px) {
    margin-right: 4vw;
    height: 20%;
    width: auto;
  }
`;

export const ImgLogoRetro = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 17rem;
  max-height: 80px;
`;

// export const RetroLogo = styled.img`
//   height: 10vh;
//   width: auto;
//   margin-right: 1vw;
//   margin-left: -5vw;

//   @media screen and (max-width: 1334px) {
//     margin-left: 0vw;
//   }

//   @media screen and (max-width: 1024px) {
//     height: 10vw;
//     margin-left: 0vw;
//     width: auto;
//   }

//   @media screen and (max-width: 460px) {
//     margin-right: 4vw !important;
//     height: 8vh;
//     width: auto;
//   }
// `;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1334px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }

  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-left: 30vh;
  padding-right: 5vh;
  font-family: tom;

  @media screen and (max-width: 1334px) {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  font-size: 1.5vh;
  height: 80px;
  font-family: tom;
  display: flex;
  justify-content: center;
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 2vh;
  cursor: pointer;
  font-family: tom;
  font-weight: 900;
`;

export const NavBtnContainer = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1334px) {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.button`
  border-radius: 2px;
  border: 2px solid #b55062;
  background: #0f1923;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;

  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #0f1923;
    border: 2px solid #b55062;
    color: white;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 0%;

  font-size: 1vh;

  @media screen and (max-width: 1024px) {
    padding-right: 2vh;
  }

  @media screen and (max-width: 768px) {
    padding-right: 2vh;
    height: 5%;
    width: 50vw;
    padding-right: 0vh;
  }

  @media screen and (max-width: 468px) {
    padding-right: 0vh;
  }
`;

export const ImgWrap = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  height: 5vh;
  cursor: pointer;
`;

export const imgBtn = styled.button`
  width: auto;
  height: 30vh;
  cursor: pointer;
`;
