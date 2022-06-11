import React from "react";
import Video from "../../video/vid.mp4";
import MainImg from "../../Image/1stpanel.png";
import {
  // MainContainer,
  // MainBg,
  // VideoBg,
  // MainContent,
  // MainRow,
  // ImgWrap,
  // ImgLogo,
  // FlexboxContainer,
  // FlexboxTeamContent,
  // ImgLogoMint,
  // MainH1,
  // BgImg,
  // BgContainer,
  // BrandImage,
  // BrandContainer,
  // BackgroundImage,
  // MainContentContainer,
  // BrandLogo,
  Container,
  BackgroundImage,
  MainContent,
  BrandLogo,
  MainH1,
} from "./MainElements";
import retro from "../../Image/retro.png";
import apesftw from "../../Image/apesftw.png";

import mint from "../../Image/mint.png";
import "./MainElements.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MainSection = () => {
  return (
    // <MainContainer>
    //   <BgContainer>
    //     <BgImg src={MainImg}></BgImg>
    //   </BgContainer>
    //   <MainContent>
    //     <MainRow>
    //       {/* <FlexboxContainer> */}
    //       {/* <FlexboxTeamContent>
    //           <ImgWrap>
    //             <ImgLogo src={apesftw} className="easeload"></ImgLogo>
    //           </ImgWrap>

    //           <MainH1
    //             className="easeloadafter"
    //             to="hero"
    //             smooth={true}
    //             duration={500}
    //             spy={true}
    //             exact="true"
    //             offset={-80}
    //           >
    //             {"  > FREE MINT < "}
    //           </MainH1>
    //         </FlexboxTeamContent>

    //         <FlexboxTeamContent>
    //           <ImgWrap className="easeloadafter" to="hero">
    //             <ImgLogoMint src={mint} className="bounce"></ImgLogoMint>
    //           </ImgWrap>
    //         </FlexboxTeamContent>
    //       </FlexboxContainer> */}

    //       <BrandContainer>
    //         <BrandImage src={apesftw}></BrandImage>

    //         <MainH1
    //           className="easeloadafter"
    //           to="hero"
    //           smooth={true}
    //           duration={500}
    //           spy={true}
    //           exact="true"
    //           offset={-80}
    //         >
    //           <FaChevronRight />
    //           FREE MINT
    //           <FaChevronLeft />
    //         </MainH1>
    //       </BrandContainer>
    //     </MainRow>
    //   </MainContent>
    // </MainContainer>

    // // <MainContainer>
    // //   <BackgroundImage src={backgroundImage}></BackgroundImage>

    // //   <MainContentContainer>
    // //     <BrandLogo scr={apesftw}></BrandLogo>
    // //   </MainContentContainer>
    // // </MainContainer>

    <Container>
      <BackgroundImage src={MainImg}></BackgroundImage>

      <MainContent>
        <BrandLogo src={apesftw} className="easeload"></BrandLogo>
        <MainH1
          className="easeloadafter"
          to="hero"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          <FaChevronRight />
          FREE MINT
          <FaChevronLeft />
        </MainH1>
      </MainContent>
    </Container>
  );
};

export default MainSection;
