import styled from "styled-components";
// import fofbb from "./../fonts/fofbb_ital.otf";
import Kooperativ from "../fonts/ST-Kooperativ/ST-Kooperativ.ttf";

// import para from "./../fonts/Tomorrow-Light.ttf";

// export const HeroContainer = styled.div`
//   background: #0c0c0c;
//   display: flex;
//   justify-content: center;
//   padding: 0 30px;
//   height: 100vh;
//   position: relative;
//   z-index: 1;
//   align-items: center;

//   @font-face {
//     font-family: rr;
//     src: url(${rr});
//   }

//   @font-face {
//     font-family: para;
//     src: url(${para});
//   }

//   /* Add: before styles */
//   :before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: linear-gradient(
//         180deg,
//         rgb(0, 0, 0, 0.2) 0%,
//         rgba(0, 0, 0, 0.6) 100%
//       ),
//       linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
//     z-index: 2;
//   }

//   @media screen and (min-width: 768px) {
//     height: 100vh;
//   }
// `;

// export const HeroBg = styled.div`
//   position: absolute;
//   top: 0vh;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 120vh;
//   overflow: hidden;

//   @media screen and (max-width: 768px) {
//     height: 150vh;
//   }

//   @media screen and (max-width: 460px) {
//     height: 160vh;
//     top: 0vh;
//   }
// `;

// export const ImgBg = styled.img`
//   width: 100%;
//   height: 100%;
//   -o-object-fit: cover;
//   object-fit: cover;
//   background: #232a34;
// `;

// export const HeroRow = styled.div`
//   display: grid;
//   grid-auto-columns: minmax(auto, 1fr);
//   align-items: center;
//   justify-content: center;
//   grid-template-areas: "col1 col2";

//   @media screen and (max-width: 768px) {
//     grid-template-areas: "col1 col1" "col2 col2";
//   }
// `;

// export const Column1 = styled.div`
//   padding: 0;
//   padding-right: 5vh;
//   padding-left: 5vh;
//   grid-area: col1;
//   display: flex;
//   justify-content: center;

//   @media screen and (max-width: 820px) {
//     display: flex;
//     justify-content: center;
//     padding-right: 5vh;
//     padding-left: 5vh;
//   }

//   @media screen and (max-width: 768px) {
//     display: flex;
//     justify-content: center;
//     margin: 5vh;
//   }

//   @media screen and (max-width: 460px) {
//     display: flex;
//     justify-content: center;
//   }
// `;

// export const Column2 = styled.div`
//   margin-bottom: 30px;
//   padding: 2vh;
//   padding-top: 0vh;
//   grid-area: col2;

//   @media screen and (max-width: 1024px) {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   @media screen and (max-width: 768px) {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   @media screen and (max-width: 460px) {
//     padding: 5vh;
//   }
// `;

// export const HeroContent = styled.div`
//   z-index: 3;
//   max-width: 1200px;
//   position: absolute;
//   padding: 2vh;
//   padding-top: 0vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   @media screen and (max-width: 1280px) {
//     display: flex;
//     align-items: center;
//     justify-content: center;

//     padding-top: 5vh;
//     padding-bottom: 5vh;
//     padding-left: 5vh;
//     padding-right: 5vh;
//   }

//   @media screen and (max-width: 1024px) {
//     display: flex;
//     align-items: center;
//     justify-content: center;

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
//     padding-top: 5vh;
//     padding-bottom: 5vh;
//     padding-left: 2vh;
//     padding-right: 2vh;
//   }

//   @media screen and (max-width: 540px) {
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
//     padding-top: 5vh;
//     padding-bottom: 5vh;
//     padding-left: 2vh;
//     padding-right: 2vh;
//   }
// `;

// export const HeroP = styled.p`
//   color: #fff;
//   font-size: 20px;
//   text-align: center;

//   font-family: para;
//   letter-spacing: 0.3vh;

//   @media screen and (max-width: 768px) {
//     font-size: 20px;
//     text-align: center;
//   }

//   @media screen and (max-width: 480px) {
//     font-size: 20px;
//     text-align: center;
//   }
// `;

// export const HeroP1 = styled.p`
//   font-size: 20px;
//   text-align: center;
//   letter-spacing: 0.3vh;
//   font-family: para;
//   text-shadow: 0 0 10px #fff, 0 0 20px #fff;

//   @media screen and (max-width: 768px) {
//     font-size: 20px;
//     text-align: center;
//   }

//   @media screen and (max-width: 480px) {
//     font-size: 20px;
//   }
// `;

// export const HeroImgWrapper = styled.div`
//   max-width: auto;
//   height: auto;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
//   align-content: space-between;

//   @media screen and (max-width: 787px) {
//     padding-right: 0vh;
//     padding-left: 0vh;
//   }

//   @media screen and (max-width: 768px) {
//     padding-right: 0vh;
//     padding-left: 0vh;
//   }

//   @media screen and (max-width: 460px) {
//     padding-right: 0vh;
//     padding-left: 0vh;
//   }
// `;

// export const HeroImg = styled.img`
//   width: 60vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media screen and (max-width: 1024px) {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 50vh;
//   }

//   @media screen and (max-width: 768px) {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 50vh;
//   }

//   @media screen and (max-width: 480px) {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 40vh;
//   }
// `;

// export const Column2Wrapper = styled.div`
//   max-width: 600px;
//   height: 50vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding-top: 0vh;
//   padding-bottom: 5vh;
//   padding-left: 5vh;
//   padding-right: 5vh;

//   @media screen and (max-width: 1024px) {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   @media screen and (max-width: 768px) {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   @media screen and (max-width: 460px) {
//     padding: 5vh;
//   }
// `;

// export const MintBtn = styled.button`
//   height: 20%;
//   width: 40%;
//   background: none;
//   border: 1px solid #f39db6;
//   white-space: nowrap;
//   color: #fff;
//   font-size: 16px;
//   outline: none;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: all 0.2s ease-in-out;
//   font-family: AtWritter;
//   text-decoration: underline;
//   font-size: 1.5vh;

//   &:hover {
//     background-color: #f39db6;
//     transition: all 0.2s ease-in-out;
//   }
// `;

// export const ButtonWrap = styled.div`
//   display: flex;
//   justify-content: center;
//   width: auto;
//   height: 80%;
//   padding-top: 5%;
// `;

// export const ButtonMint = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: contain;
//   align-items: center;
// `;

// export const ImgLogo = styled.img`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 30vw;

//   @media screen and (max-width: 1024px) {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding-left: 2vh;
//     padding-right: 2vh;
//     width: 70vh;
//   }

//   @media screen and (max-width: 768px) {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding-top: 5vh;
//     padding-left: 2vh;
//     padding-right: 2vh;
//     width: 60vh;
//   }

//   @media screen and (max-width: 480px) {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 40vh;
//     padding-left: 5vh;
//     padding-right: 5vh;
//   }
// `;

// export const Input = styled.input`
//   background: transparent;
//   font-family: para;
//   color: #fff;
//   padding: 1vh;
//   border-color: yellow;
//   border-radius: 5px;
//   width: 5vh;
// `;

// export const FlexboxContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   position: relative;
//   padding-right: 2vh;
//   padding-right: left;

//   @media screen and (max-width: 1024px) {
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: center;
//     align-content: space-between;
//   }

//   @media screen and (max-width: 768px) {
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: center;
//     align-content: space-between;
//   }

//   @media screen and (max-width: 468px) {
//     flex-wrap: wrap;
//     justify-content: center;
//     align-items: center;
//     align-content: space-between;
//   }
// `;

// export const FlexboxContent1 = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 0vh;
//   color: #fff;
//   font-family: para;
//   padding-right: 1vh;

//   @media screen and (max-width: 460px) {
//     padding-left: 5vh;
//   }

//   @media screen and (max-width: 375px) {
//     padding-left: 5vh;
//   }
// `;

// export const FlexboxContent2 = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 0vh;

//   @media screen and (max-width: 460px) {
//     padding-right: 5vh;
//   }
// `;

// export const FlexboxContent1P = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 0vh;
//   color: #fff;
//   font-family: para;
//   font-weight: 900;
//   font-size: 20px;
//   text-align: center;

//   font-family: para;
//   text-shadow: 0 0 10px #fff, 0 0 20px #fff;

//   @media screen and (max-width: 460px) {
//     padding-left: 5vh;
//   }

//   @media screen and (max-width: 375px) {
//     padding-left: 5vh;
//   }
// `;

// export const FlexboxContent2P = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 0vh;
//   padding-left: 0.5vh;

//   @media screen and (max-width: 460px) {
//     padding-right: 5vh;
//   }
// `;

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100vw;
  font-family: "Kooperativ";

  @font-face {
    font-family: "Kooperativ";
    src: url(${Kooperativ});
  }
`;

export const BackgroundImage = styled.img`
  min-height: 100vh;
  min-width: 100vw;
  object-fit: cover;
`;

export const MainContent = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TaglineImg = styled.img`
  width: 80vw;
  height: 10rem;
  object-fit: cover;
  margin-top: 1rem;
  /* @media screen and (min-width: 1900px) {
    margin: 2rem 0;
    height: 15rem;
  } */
`;

export const GridContent = styled.div`
  display: grid;
  height: calc(100vh - 80px);
  width: 100vw;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
export const ApeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-content: center;
`;
export const GridApe = styled.img`
  justify-self: center;
  max-height: 700px;
  @media screen and (max-width: 1024px) {
    max-width: 500px;
  }
  @media screen and (max-width: 768px) {
    max-width: 400px;
  }
`;

export const GridForm = styled.div`
  display: grid;
  place-content: center;
  padding: 2rem 0;
`;

export const SupplyCount = styled.h1`
  color: #d49328;
  font-size: 3rem;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
  @media screen and (max-width: 1120px) {
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const TotalSupply = styled.span`
  color: #b04618;
  padding: 0 1rem;
`;
export const FreeMint = styled.p`
  text-align: center;
  font-size: 3rem;
  color: #d49328;
  padding: 1rem 0;
`;
export const FreeText = styled.span`
  color: #b04618;
`;
export const MintAmount = styled.p`
  color: #d49328;
  font-size: 3rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1142px) {
    flex-direction: column;
  }
`;

export const MaxContainer = styled.span`
  display: flex;
  padding: 0 1rem;
`;

export const MaxValue = styled.span`
  color: #b04618;
`;

export const MintInput = styled.input`
  color: #d49328;
  font-size: 3rem;
  font-family: Kooperativ;
  text-align: center;
  border-bottom: 2px solid dashed;
  height: 100%;
  margin: 0 1rem;
  outline: none;
  border-top: none;
  border-right: none;
  border-left: none;
  background-color: transparent;
`;

export const MintButton = styled.button`
  max-width: 50%;
  justify-self: center;
  text-align: center;
  padding: 1rem 4rem;
  margin: 2rem 0;
  border-radius: 1rem;
  font-family: Kooperativ;
  font-size: 2rem;
  background-color: #b04618;
  color: #d49328;
  cursor: pointer;

  @media screen and (max-width: 640px) {
    max-width: 80%;
  }
  &:active {
    transform: translateY(5px);
  }
`;
