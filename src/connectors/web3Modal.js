import { providerOptions } from "./web3Connectors";
import Web3Modal from "web3modal";
export const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions, // required
});
