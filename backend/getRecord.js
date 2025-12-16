// getRecord.js
const contract = require('./contract');

async function main() {
    const index = 0; // change as needed
    const record = await contract.getRecord(index);
    console.log(`Record at index ${index}:`);
    console.log(`Data: ${record[0]}`);
    console.log(`Timestamp: ${record[1]}`);
    console.log(`Creator: ${record[2]}`);
}

main().catch(console.error);
