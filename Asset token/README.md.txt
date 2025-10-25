# 🪙 AssetToken — Real-World Asset Tokenization on Hedera

AssetToken (ATK) is a decentralized solution for representing real-world assets as digital tokens on the Hedera network.  
It helps users invest in tangible assets like land, gold, or art using secure, transparent, and low-cost blockchain technology.

## 🌍 Vision
AssetToken allows users to tokenize real-world assets (like land, gold, or art) into digital tokens on the Hedera network.  
It aims to make investments more accessible, transparent, and secure across Africa.

## 💡 Key Features
- Tokenizes real-world assets using smart contracts
- Transparent ownership tracking on Hedera
- Low-cost, fast transactions
- Supports fractional ownership

## ⚙️ Tech Stack
- **Smart Contract:** Solidity (Hedera-compatible EVM)
- **Frontend:** React (planned)
- **Deployment Tool:** Hardhat / Remix
- **Network:** Hedera Testnet

## 🔗 Smart Contract Details
- **Contract Name:** AssetToken
- **Symbol:** ATK
- **Total Supply:** 1,000,000 ATK
- **Test Deployment Address:** `0xd9145CCE52D386f254917e481eB44e9943F39138`

## 🚀 How It Works
1. Owner creates and deploys an `AssetToken` contract with a fixed token supply.
2. Each token represents a share of a real-world asset.
3. Users can buy, hold, and transfer these tokens freely.

## 🧩 Smart Contract
The contract file is located in: `contracts/AssetToken.sol`

## 📜 Deployment Script
The deployment file is located in: `scripts/deploy.js`

## 🔬 Testing
The contract can be tested directly using [Remix IDE](https://remix.ethereum.org).

1. Upload the `AssetToken.sol` file.
2. Compile it (Solidity 0.8.x).
3. Deploy it using a constructor value (e.g., 1000000 for total supply).

## 🔮 Future Enhancements
- Integrate with a React frontend for asset registration and trading
- Deploy on Hedera Testnet for real transactions
- Add verification and audit for tokenized assets
- Enable DeFi integrations (lending, staking, insurance)

## 👥 Team
- Project by: **Kalicharan S. M**
- Role: **AI Researcher | Web3 Developer**
- Hackathon: **Hedera Africa Hackathon 2025 (Onchain Finance & RWA Track)**
