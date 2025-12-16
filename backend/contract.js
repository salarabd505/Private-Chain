/*
// scripts/contract.js
require('dotenv').config();
const { ethers } = require('ethers');
const fs = require('fs');
const path = require('path');

// Load ABI from artifacts (Hardhat output)
const abiPath = path.join(__dirname, '../artifacts/contracts/PrivChain.sol/PrivChain.json');
const abi = JSON.parse(fs.readFileSync(abiPath)).abi;

// Environment variables
const rpcUrl = process.env.RPC_URL;
const contractAddress = process.env.CONTRACT_ADDRESS;
const privateKey = process.env.PRIVATE_KEY;

// Setup provider and signer
const provider = new ethers.JsonRpcProvider(rpcUrl);
const wallet = new ethers.Wallet(privateKey, provider);

// Contract instance
const contract = new ethers.Contract(contractAddress, abi, wallet);

module.exports = contract;
*/

// backend/contract.js
const { ethers } = require('ethers');
const fs = require('fs');
const path = require('path');

// Load ABI from artifacts
const abiPath = path.join(__dirname, '../artifacts/contracts/PrivChain.sol/PrivChain.json');
const abi = JSON.parse(fs.readFileSync(abiPath)).abi;

// Environment variables (assume dotenv loaded in server.js)
const rpcUrl = process.env.RPC_URL?.trim();
const contractAddress = process.env.CONTRACT_ADDRESS?.trim();
const privateKey = process.env.PRIVATE_KEY?.trim();

// Debug log to ensure key is correct
console.log("RPC URL:", rpcUrl);
console.log("Contract Address:", contractAddress);
console.log("Private Key:", privateKey, "Length:", privateKey?.length);

// Setup provider and wallet
const provider = new ethers.JsonRpcProvider(rpcUrl);
const wallet = new ethers.Wallet(privateKey, provider);

// Contract instance
const contract = new ethers.Contract(contractAddress, abi, wallet);

module.exports = contract;
