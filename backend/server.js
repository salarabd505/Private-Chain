// backend/server.js
require('dotenv').config({ path: '../.env' }); // load dotenv once at the start
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contract = require('./contract');
const { ethers } = require('ethers');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;

// Store record
app.post('/store', async (req, res) => {
    try {
        const { data } = req.body;
        const tx = await contract.storeRecord(data);
        await tx.wait();
        res.json({ status: 'success', txHash: tx.hash });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get record by index
app.get('/record/:index', async (req, res) => {
    try {
        const index = parseInt(req.params.index);
        const record = await contract.getRecord(index);
        res.json({
            data: record[0],
            timestamp: record[1].toString(),
            creator: record[2]
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get total record count
app.get('/count', async (req, res) => {
    try {
        const count = await contract.getRecordCount();
        res.json({ count: count.toString() });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Transfer ETH
app.post('/transfer', async (req, res) => {
    try {
        let { to, amount } = req.body;
        to = ethers.getAddress(to.trim()); // ensure valid address
        const value = ethers.parseEther(amount);
        const tx = await contract.transferValue(to, { value });
        await tx.wait();
        res.json({ status: 'success', txHash: tx.hash });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});
