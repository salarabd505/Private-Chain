// getRecordCount.js
const contract = require('./contract');

async function main() {
    const count = await contract.getRecordCount();
    console.log(`Total records stored: ${count}`);
}

main().catch(console.error);
