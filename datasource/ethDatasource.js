const { RESTDataSource } = require("apollo-datasource-rest");

// Vitalik's Ethereum address used for example API requests
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"; 

// Etherscan API data source class extending RESTDataSource
class EtherDataSource extends RESTDataSource {

  // Constructor sets base URL for Etherscan API 
  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api";
  }

  // Gets Ether balance for a specified Ethereum address
  async etherBalanceByAddress() {
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Gets total Ether supply
  async totalSupplyOfEther() {
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Gets latest Ethereum price
  async getLatestEthereumPrice() {
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Estimates gas usage for a transaction
  async getBlockConfirmationTime() {
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

module.exports = EtherDataSource;
