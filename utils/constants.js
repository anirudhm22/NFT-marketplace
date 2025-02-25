const HEADER_ROUTES = {
  HOME: "/",
  CREATE_ITEM: "/create-item",
  MY_ASSETS: "/my-assets",
  CREATOR_DASHBOARD: "/creator-dashboard",
};

const INPUT_MAX_LENGTH = 64;

const TEXTAREA_MAX_LENGTH = 255;

const CRYPTO_CURRENCY = "ether";

const INFURA_URL = "infura-ipfs.io";

const PROJECT_ID = "3ded568cc04c4432ae7b581e2e510f14";

const IPFS_PROJECT_ID = "2EB324y279lAM6hkaRLDEPQjcLU";

const ACTION_TYPES = {
  LIST_ITEM: "list_item",
  REMOVE_ITEM: "remove_item",
  BUY: "buy",
};

const MATIC_NETWORK = {
  chainId: "0x13881",
  rpcUrls: ["https://matic-mumbai.chainstacklabs.com/"],
  chainName: "Matic Test net",
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
  blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
};

// Use module.exports to export in CommonJS
module.exports = {
  HEADER_ROUTES,
  INPUT_MAX_LENGTH,
  TEXTAREA_MAX_LENGTH,
  CRYPTO_CURRENCY,
  ACTION_TYPES,
  MATIC_NETWORK,
  IPFS_PROJECT_ID,
  INFURA_URL,
  PROJECT_ID,
};
