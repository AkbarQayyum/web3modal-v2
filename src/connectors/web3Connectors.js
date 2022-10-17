import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
export const providerOptions = {
  binancechainwallet: {
    package: true,
  },
  walletconnect: {
    package: WalletConnect,
    options: {
      rpc: "https://mainnet.infura.io/v3/02a5c78babba4898ad4a667b40a1d843",
      infuraid: "02a5c78babba4898ad4a667b40a1d843",
    },
  },
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      rpc: "https://mainnet.infura.io/v3/02a5c78babba4898ad4a667b40a1d843",
      appName: "Web 3 Modal Demo",
      infuraid: "02a5c78babba4898ad4a667b40a1d843",
    },
  },
};
