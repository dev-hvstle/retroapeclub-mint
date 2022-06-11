import React, { useState, useRef } from "react";
import Web3 from "web3";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HeroSection from "../HeroSection";
import RetroApeClub from "../abi/ApesFTW.json";
import InfoSection from "../components/InfoSection";
import RoadmapSection from "../components/RoadmapSection";
import TeamSection from "../components/TeamSection";
import FooterSection from "../components/FooterSection";
import bgMusic from "../music/loop.mp3";
import silentMusic from "../music/silence.mp3";
import MainSection from "../components/MainSection";
import useSound from "use-sound";
import Footer from "../components/FooterSection/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [account, setAccount] = useState("Connect Wallet");
  const [isInitialized, setInitialized] = useState(false);
  const [remainingSupply, setRemainingSupply] = useState();
  const [totalSupply, setTotalSupply] = useState(6969);
  const [token, setToken] = useState();
  const [isEligibleForFreeMint, setIsEligibleForFreeMint] = useState(false);
  const web3 = new Web3(window.ethereum);
  const tokenAddress = "0xF1f04a9DEBC4c244D9f9ee77ECCef31A2c125128";
  const [audioBg] = useSound(bgMusic);

  // const {MerkleTree} = require('merkletreejs');
  // const keccak256 = require('keccak256');

  // let whitelistAddy = ["0x0040347b5f6d17C6Fd3969103246a70B234Ce80C","0x80d3F0c820Cf9Ed71a42De74220Cfc3165966eDe","0xa45A3692e37089cE1AFEc88921650Cd1f1C2c6bD"];

  // const leafNodes = whitelistAddy.map(addr => keccak256(addr));
  // const merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs: true});
  // const rootHash = merkleTree.getRoot();
  // console.log('Whitelist Merkle Tree\n', merkleTree.toString());
  // console.log('RootHash : ', rootHash);

  const initializeWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const tempAccount = web3.utils.toChecksumAddress(accounts[0]);
      console.log(tempAccount);
      setAccount(tempAccount);
      const chainId = await web3.eth.getChainId();
      if (tempAccount !== "") {
        setInitialized(true);
      }
      try {
        const tempToken = new web3.eth.Contract(RetroApeClub.abi, tokenAddress);
        const tempRemainingSupply = await tempToken.methods
          .totalSupply()
          .call();
        setRemainingSupply(6969 - parseInt(tempRemainingSupply));
        setToken(tempToken);
        //console.log(tempToken);
        loadContract();
      } catch (e) {
        console.log("Errror: ", e);
      }
    }
  };

    const loadContract = async() =>{
      try{
          const tempToken = new web3.eth.Contract(RetroApeClub.abi, tokenAddress);
          //const tempTotalSupply = await tempToken.methods.totalSupply().call();
          console.log(account);
          //setTotalSupply(tempTotalSupply);
          setToken(tempToken);
          //console.log(tempToken);

      }
      catch(e){
          console.log('Errror: ', e);
      }
  }

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const playMusic = () => {
    var audioBG = document.getElementById("audioBg");
    audioBG.play();
  };

  window.onload = () => {
    audioBg.call();
    if (typeof window.ethereum !== "undefined") {
      initializeWallet();
      //await loadContract();

      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });

      window.ethereum.on("disconnect", () => {
        window.location.reload();
      });
    }
  };

  return (
    <>
      {/* <audio id="audioBg" src={bgMusic}></audio> */}

      <Sidebar
        toggle={toggle}
        isOpen={isOpen}
        initializeWallet={initializeWallet}
        isInitialized={isInitialized}
        account={account}
      />
      <Navbar
        toggle={toggle}
        initializeWallet={initializeWallet}
        isInitialized={isInitialized}
        account={account}
      />
      <MainSection />
      <HeroSection
        token={token}
        account={account}
        isEligibleForFreeMint={isEligibleForFreeMint}
        totalSupply={totalSupply}
        remainingSupply={remainingSupply}
      />
      {/* <InfoSection />
      <RoadmapSection /> */}
      {/* <TeamSection /> */}
      {/* <FooterSection /> */}
      {/* <Footer/> */}
    </>
  );
};

export default Home;
