import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42]
});

const walletconnect = new WalletConnectConnector({
  rpcUrl: 'https://mainnet.infura.io/v3/02a5c78babba4898ad4a667b40a1d843',
  bridge: "https://bridge.walletconnect.org",
  qrcode: true
});

const walletlink = new WalletLinkConnector({
  url: "https://mainnet.infura.io/v3/02a5c78babba4898ad4a667b40a1d843",
  appName: "learnweb3",
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const connectors = {
  injected: injected,
  walletConnect: walletconnect,
  coinbaseWallet: walletlink
};
