import styled from 'styled-components';
import fofbb from '../../fonts/fofbb_ital.otf';
import rr from '../../fonts/roadrage.otf';
import para from '../../fonts/Tomorrow-Light.ttf'
import gidole from '../../fonts/Gidole.otf'

export const TeamContainer = styled.div`

    
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    padding: 0 0px;
    height: 100vh;
    position: relative;
    top:100vh;
    z-index: 1;
    align-items: center;

    @media screen and (max-width: 1700px){
        position: relative;
        top:90vh;
        
    }

    @media screen and (max-width: 1500px){
        position: relative;
        top:99vh;
        
    }

    @media screen and (max-width: 1216px){
        position: relative;
        top:99vh;
        
    }

    @media screen and (max-width: 1024px){
        position: relative;
        top:99vh;
        
    }

 
    @media screen and (max-width: 820px){
        position: relative;
        top:90vh;
        
        
    }

    @media screen and (max-width: 768px){
        position: relative;
        top:170vh;
    
        
        
    }

    @media screen and (max-width: 540px){
        position: relative;
        top:170vh;
    
    }

    @media screen and (max-width: 468px){
        position: relative;
        top:170vh;
  
    
    }

    @media screen and (max-width: 390px){
        position: relative;
        top:165vh;
    
    }
    
    @media screen and (max-width: 375px){
        position: relative;
        top:150vh;
    
    }

    @font-face {
        font-family: rr;
        src: url(${rr});
    }

     
    @font-face {
        font-family: para;
        src: url(${para});
    }

    @font-face {
        font-family: gidole;
        src: url(${gidole});
    }

     /* Add: before styles */
  

  

`

export const TeamBg = styled.div`

    position: absolute;
    top: 0vh;
    right: 0;
    bottom: 0;
    left: 0;
    width: auto;
    height: 100vh;
    overflow: hidden;

    @media screen and (max-width:1024px){
        height: 250vh;
    }

    @media screen and (max-width:768px){
        height: 240vh;
    }

    @media screen and (max-width:468px){
        height: 250vh;
    }
   



`

export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;

    @media screen and (max-width:1024px){
        display: block;
        width: auto;
        height: 255vh;
     
   }

    @media screen and (max-width:768px){
        display: block;
        width: auto;
        height: 250vh;
     
   }
  
   
   @media screen and (max-width:460px){
        display: block;
        width: auto;
        height: 320vh;
        
   }
`;


export const TeamRow = styled.div`
    display: flex;
    justify-content: flex-start;
    width:100%;
  

    @media screen and (max-width: 768px){
        
    }
`;


export const TeamRow2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 5vh;
    padding-left: 5vh;
  

    @media screen and (max-width: 768px){
        
    }
`;

export const Column1 = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 0px;


    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
       
        
    }

    @media screen and (max-width: 460px){
        display: flex;
        justify-content: center;
        
    }
    
    
`;

export const Column2 = styled.div`
    margin-bottom: 30px;
    padding:2vh;
    padding-top:0vh;
    
`;


export const TeamContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    top:15vh;
    padding-top: 10;
    padding-bottom: 5vh;
    padding-left: 5vh;
    padding-right: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    

    @media screen and (max-width:1220px){
        display: flex;
        align-items: center;
        justify-content: center;
        top:10vw;
        padding-top: 10;
        padding-bottom: 5vh;
        padding-left: 5vh;
        padding-right: 5vh;
    }

    @media screen and (max-width:1024px){
        display: flex;
        align-items: center;
        justify-content: center;
        top:10vw;
        padding-top: 10;
        padding-bottom: 5vh;
        padding-left: 5vh;
        padding-right: 5vh;
    }

    @media screen and (max-width:768px){
        top:10vw;
        padding-top: 10;
        padding-bottom: 5vh;
        padding-left: 5vh;
        padding-right: 5vh;
    }

    @media screen and (max-width:468px){
        top:20vw;
        padding-top: 1vh;
        padding-bottom: 5vh;
        padding-left: 2vh;
        padding-right: 2vh;
    }
`;

export const TeamH1 = styled.h1`
    color: #fff;
    font-size: 7vh;
    text-align: center;
    font-family: rr;
    letter-spacing: 1.1vh;
    
    padding-bottom:5vh;
    
    padding-left: 1vh;
    

   

    @media screen and (max-width:1024px){
        font-size: 4vh;
    }


    @media screen and (max-width: 768px){
        font-size: 4vh;
        text-align: center;
    }

    @media screen and (max-width: 480px){
        font-size: 3vh;
        text-align: center;
    }
`;


export const TeamH2 = styled.h1`
    color: #fff;
    font-size: 3vh;
    text-align: center;
    font-family: tom;
    font-weight: bold;
    letter-spacing: 1.1vh;
    line-height: 6.5vh;
    padding-top:3vh;
    padding-bottom:0.5vh;
   
    

    @media screen and (max-width:1280px){
       
    }

    @media screen and (max-width:1024px){
        font-size: 3.5vw;
    }


    @media screen and (max-width: 768px){
        font-size: 3vw;
        text-align: center;
    }

    @media screen and (max-width: 480px){
        font-size: 2vh;
        text-align: center;
    }
`;


export const TitleContainer = styled.div`

    height: 30vh;

`



export const TeamImgWrapper = styled.div`
    max-width: 50vh;
    height: 100%;
    
`;

export const TeamP = styled.p`

    color: #fff;
    font-size: 2vh;
    text-align: center;
    font-family: para;
   

`

export const TeamImg = styled.img`
    width: 150%;
    border-radius: 20px;

    @media screen and (max-width: 768px){
        width: 50%;
    }

    @media screen and (max-width: 480px){
        width: 100%;
    }
`;

export const Column2Wrapper = styled.div`
    max-width: 600px;
    height: 50vh;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    padding-top: 0vh;
    padding-bottom: 5vh;
    padding-left: 5vh;
    padding-right: 0vh;

    @media screen and (max-width: 460px){
        padding:5vh;
    }
`;

export const ImgLogo = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vw;
    width: 20vw;
    padding: 2vh;

    
    @media screen and (max-width:1220px){
        height: 20vw;
        width: 20vw;
        padding: 2vh;
    }

    @media screen and (max-width:1024px){
        height: 30vh;
        width: 30vh;
        padding: 2vh;
    }

    @media screen and (max-width:768px){
        height: 30vh;
        width: 30vh;
        padding: 2vh;
    }

    @media screen and (max-width:468px){
        height: 30vh;
        width: 30vh;
        padding: 2vh;
    }
  
`;


export const FlexboxContainer = styled.div`

    display: flex;
    justify-content: center;
    position: relative;
    padding-left: 5vh;
    padding-right: 5vh;

  

    @media screen and (max-width: 1024px){
       
       flex-wrap: wrap;
       justify-content: center;
       align-items: center;
       align-content: space-between;
       padding-left: 5vh;
       padding-right: 5vh;
   }
    
    @media screen and (max-width: 768px){
       
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: space-between;
        padding-left: 5vh;
        padding-right: 5vh;
   
    }

    @media screen and (max-width: 468px){
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: space-between;
        padding-left: 5vh;
        padding-right: 5vh;

    }
    

`

export const FlexboxTeamContent = styled.div`

    padding: 5vh;
 

`