// transferValue.js
const contract = require('./contract');
const { ethers } = require('ethers');

async function main() {
    const toAddress = "0xd335b679c0DD78d6E051499Ce7D0e8D6f13be90d"; // recipient
    const amount = ethers.parseEther("0.1"); // amount to send

    const tx = await contract.transferValue(toAddress, { value: amount });
    console.log("Transaction sent. Waiting for confirmation...");
    await tx.wait();
    console.log(`Sent ${ethers.formatEther(amount)} ETH to ${toAddress}`);
}

main().catch(console.error);
