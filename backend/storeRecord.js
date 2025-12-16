// storeRecord.js
const contract = require('./contract');

async function main() {
    const tx = await contract.storeRecord("Hello from local test!");
    console.log("Transaction sent. Waiting for confirmation...");
    await tx.wait();
    console.log("Record stored successfully!");
}

main().catch(console.error);
