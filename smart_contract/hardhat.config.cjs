require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.24",
  networks: {
    ropsten: {
      url: "https://eth-sepolia.g.alchemy.com/v2/wX371rt06bCnPHeMCloj-znRmpaVJ2Fw",
      accounts: ["ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"]
    }
  }
};
