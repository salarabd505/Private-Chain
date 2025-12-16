# PrivChain: Private Blockchain Local Test

A simple private blockchain application to store and manage records, with ETH transfer functionality, using **Hardhat**, **ethers.js**, and a **Node.js backend**. The frontend interacts with the backend via HTTP endpoints, avoiding direct RPC/CORS issues.

---

## Table of Contents

* [Project Overview](#project-overview)
* [Folder Structure](#folder-structure)
* [Prerequisites](#prerequisites)
* [Setup Instructions](#setup-instructions)
* [Available Scripts](#available-scripts)
* [Frontend Usage](#frontend-usage)
* [Notes](#notes)

---

## Project Overview

* Smart contract written in **Solidity (0.8.20)**: `PrivChain.sol`

  * Store records with `data`, `timestamp`, and `creator`.
  * Retrieve records by index.
  * Retrieve total record count.
  * Transfer ETH between accounts.
* **Node.js backend** using `express.js`:

  * Exposes HTTP endpoints for store/get/count/transfer.
  * Interacts with the private blockchain via ethers.js.
* **Frontend**:

  * Simple HTML + JS frontend (`index.html` + `app.js`) that interacts with backend endpoints.
  * Avoids CORS issues by not directly calling RPC.

---

## Folder Structure

```
D:/is_project/chain-contracts/
├─ backend/
│   ├─ contract.js          # Contract instance setup
│   ├─ server.js            # Express backend API
│   ├─ storeRecord.js       # Optional: standalone script
│   ├─ getRecord.js         # Optional: standalone script
│   ├─ getRecordCount.js    # Optional: standalone script
│   └─ transferValue.js     # Optional: standalone script
├─ frontend/
│   ├─ index.html           # Frontend UI
│   └─ app.js               # Frontend JS for API calls
├─ contracts/
│   └─ PrivChain.sol        # Solidity contract
├─ artifacts/               # Hardhat compilation output
├─ scripts/
│   └─ deploy.js            # Hardhat deployment script
├─ .env                     # Environment variables (RPC, contract, private key)
├─ package.json
└─ hardhat.config.js
```

---

## Prerequisites

* Node.js v18+
* npm
* Hardhat
* Local Geth private chain running
* A deployed `PrivChain` contract

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/PrivChain.git
cd PrivChain/chain-contracts
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up `.env` file** (in `chain-contracts/`)

```env
RPC_URL=http://127.0.0.1:8545
CONTRACT_ADDRESS=0xYourDeployedContractAddressHere
PRIVATE_KEY=0xYourNodePrivateKeyHere
```

* `RPC_URL`: RPC endpoint of your private chain
* `CONTRACT_ADDRESS`: Address from Hardhat deployment
* `PRIVATE_KEY`: 0x-prefixed 32-byte private key from your node

4. **Start the backend**

```bash
cd backend
node server.js
```

* Backend will start at `http://localhost:3000`

---

## Available Backend Endpoints

| Method | Endpoint       | Description            | Body / Params                            |
| ------ | -------------- | ---------------------- | ---------------------------------------- |
| POST   | /store         | Store a record         | `{ "data": "Your data here" }`           |
| GET    | /record/:index | Get record by index    | URL param: index                         |
| GET    | /count         | Get total record count | None                                     |
| POST   | /transfer      | Transfer ETH           | `{ "to": "0xAddress", "amount": "0.1" }` |

---

## Frontend Usage

1. Open `frontend/index.html` in a browser.
2. Use the input fields and buttons to:

* Store a record
* Get a record by index
* Get total record count
* Transfer ETH

3. Check the console or output divs for results.

---

## Useful Commands

* **Compile contract**

```bash
npx hardhat compile
```

* **Deploy contract**

```bash
npx hardhat run scripts/deploy.js --network localhost
```

* **Start backend server**

```bash
node backend/server.js
```

* **Test frontend**

Open `frontend/index.html` in your browser.

* **Check blockchain accounts**

```bash
geth attach http://127.0.0.1:8545
> eth.accounts
```

---

## Notes

* This project uses a **Node.js backend to avoid direct RPC calls from the frontend**, preventing CORS issues.
* Make sure your private key is **0x-prefixed 32-byte hex** and `.env` is saved **UTF-8 without BOM**.
* You can extend the backend to add authentication, logging, or more advanced functionality.
* Designed for **local testing on a private chain**, not production Ethereum network.