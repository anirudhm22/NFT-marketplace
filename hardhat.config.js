// import { PROJECT_ID } from "./utils/constants";
const { PROJECT_ID } = require("./utils/constants");

require("@nomiclabs/hardhat-waffle");
const fs = require("fs");

const privateKey =
  fs.readFileSync(".secret").toString().trim() || "01234567890123456789";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-amoy.infura.io/v3/4da1240647e5421fb921258075010efc`,
      accounts: [privateKey],
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/4da1240647e5421fb921258075010efc`,
      accounts: [privateKey],
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
