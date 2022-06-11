import styled from "styled-components";
import tom from "../../fonts/Tomorrow-Light.ttf";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import Kooperativ from "../../fonts/ST-Kooperativ/ST-Kooperativ.ttf";

// export const MainContainer = styled.div`
//   background: #0c0c0c;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   position: relative;
//   z-index: 1;
// `;

// export const MainBg = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// `;

// export const VideoBg = styled.video`
//   width: 100%;
//   height: 100%;
//   -o-object-fit: cover;
//   object-fit: cover;
//   background: #232a34;
// `;

// export const MainContent = styled.div`
//   z-index: 3;
//   max-width: 1200px;
//   position: absolute;
//   padding: 0vh;
//   padding-top: 0vh;
//   display: flex;

//   justify-content: center;

//   @media screen and (max-width: 1280px) {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     top: 0vw;
//     padding-top: 5vh;
//     padding-bottom: 5vh;
//     padding-left: 5vh;
//     padding-right: 5vh;
//   }

//   @media screen and (max-width: 1024px) {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     top: 0vw;
//     padding-top: 5vh;
//     padding-bottom: 5vh;
//     padding-left: 5vh;
//     padding-right: 5vh;
//   }

//   @media screen and (max-width: 820px) {
//     padding-top: 5vh;
//     padding-bottom: 5vh;
//     padding-left: 5vh;
//     padding-right: 5vh;
//   }

//   @media screen and (max-width: 768px) {
//     top: 0vw;
//     padding-top: 5vh;
//     padding-bottom: 5vh;
//     padding-left: 2vh;
//     padding-right: 2vh;
//   }

//   @media screen and (max-width: 540px) {
//     top: 0vh;
//     padding-top: 5vh;
//     padding-bottom: 5vh;
//     padding-left: 2vh;
//     padding-right: 2vh;
//   }

//   @media screen and (max-width: 468px) {
//     padding-top: 5vh;
//     padding-bottom: 5vh;
//     padding-left: 2vh;
//     padding-right: 2vh;
//   }

//   @media screen and (max-width: 280px) {
//     top: 10vh;
//     padding-top: 5vh;
//     padding-bottom: 5vh;
//     padding-left: 2vh;
//     padding-right: 2vh;
//   }
// `;

// export const MainRow = styled.div`
//   height: 100vh;
//   width: 100vw;
// `;

// export const BrandContainer = styled.main``;

// export const BrandImage = styled.img``;

// export const ImgWrap = styled.div`
//   display: flex;
//   justify-content: center;

//   @media screen and (max-width: 787px) {
//     max-width: 350px;
//     padding-right: 0vh;
//     padding-left: 5vh;
//   }

//   @media screen and (max-width: 768px) {
//     max-width: 350px;
//     padding-right: 5vh;
//     padding-left: 5vh;
//   }

//   @media screen and (max-width: 460px) {
//     max-width: 350px;

//     padding-right: 5vh;
//     padding-left: 5vh;
//   }
// `;

// export const ImgLogo = styled.img`
//   width: 100%;
//   @media screen and (max-width: 1024px) {
//     width: 70vw;
//   }

//   @media screen and (max-width: 768px) {
//     padding-top: 0vh;
//     width: 60vh;
//   }

//   @media screen and (max-width: 480px) {
//     width: 40vh;
//   }
// `;

// export const ImgLogoMint = styled.img`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 3vh;
//   cursor: pointer;
// `;

// export const MainH1 = styled(LinkS)`
//   display: flex;
//   justify-content: center;
//   font-size: 3vh;
//   color: #080849;
//   cursor: pointer;
//   text-align: center;
//   font-family: "Kooperativ";

//   @font-face {
//     font-family: "Kooperativ";
//     src: url(${Kooperativ});
//   }
// `;

// export const FlexboxContainer = styled.div`
//   flex-wrap: wrap;
//   justify-content: space-around;
//   align-items: center;
//   align-content: space-between;
//   height: 20%;

//   @media screen and (max-width: 1024px) {
//     flex-wrap: wrap;
//     justify-content: space-around;
//     align-items: center;
//     align-content: space-between;
//   }

//   @media screen and (max-width: 768px) {
//     flex-wrap: wrap;
//     justify-content: space-around;
//     align-items: center;
//     align-content: space-between;
//   }

//   @media screen and (max-width: 468px) {
//     flex-wrap: wrap;
//     justify-content: space-around;
//     align-items: center;
//     align-content: space-between;
//   }
// `;

// export const FlexboxTeamContent = styled.div`
//   /* padding: 5vh;
//   padding-top: 10vh;
//   padding-bottom: 10vh; */
// `;

// export const BgContainer = styled.main`
//   height: 100vh;
//   width: 100vw;
// `;

// export const BgImg = styled.img`
//   height: 100%;
//   width: 100%;
//   object-fit: cover;
// `;

// // export const MainContainer = styled.div`
// //   height: 100vh;
// //   width: 100vw;
// //   position: relative;
// // `;

// // export const BackgroundImage = styled.img`
// //   height: 100%;
// //   width: 100%;
// //   object-fit: cover;
// // `;

// // export const MainContentContainer = styled.div`
// //   z-index: 3;
// //   max-width: 1200px;
// //   position: absolute;
// //   padding: 0vh;
// //   padding-top: 0vh;
// //   display: flex;
// //   inset: 0;
// //   justify-content: center;
// // `;
// // export const BrandLogo = styled.img`
// //   width: 550px;
// // `;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`;
export const BackgroundImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
export const MainContent = styled.div`
  display: flex;
  padding-top: 8rem;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 3;
  inset: 0;

  @media screen and (max-width: 768px) {
    padding-top: 5rem;
  }
`;
export const BrandLogo = styled.img`
  height: 15rem;
  width: 50rem;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    height: 10rem;
    width: 35rem;
    margin-top: 5rem;
  }
  @media screen and (max-width: 640px) {
    height: 5rem;
    width: 20rem;
    margin-top: 5rem;
  }
`;
export const MainH1 = styled(LinkS)`
  display: flex;
  justify-content: center;
  font-size: 2.3rem;
  color: #080849;
  cursor: pointer;
  text-align: center;
  font-family: "Kooperativ";

  @font-face {
    font-family: "Kooperativ";
    src: url(${Kooperativ});
  }
`;
