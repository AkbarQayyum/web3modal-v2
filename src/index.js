import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import App from "./App";
import './index.css'
import { Web3Modal } from "@web3modal/react";
import { chains ,providers} from "@web3modal/ethereum";

const getLibrary = (provider) => {
return new Web3Provider(provider)
};


const modalConfig = {
  theme: "dark",
  accentColor: "default",
  ethereum: {
    appName: "Web3Modal v2",
    chains: [chains.goerli,chains.ethereum,chains.binanceSmartChain,chains.binanceSmartChainTestnet,chains.rinkeby],
    providers,
    autoConnect:true
  },
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <ChakraProvider>
      <Web3ReactProvider getLibrary={getLibrary}> */}
    <App />
    <Web3Modal />
      {/* </Web3ReactProvider>
    </ChakraProvider> */}
  </StrictMode>,
  rootElement
);
