# E-Voting-Decentralized-Application-using-Blockchain-Technology

# Blockchain Based E-Voting DApp

## Overview

A decentralized electronic voting application built using
Solidity and Ethereum blockchain technology.

## Technologies

- Solidity
- Hardhat
- Ethereum
- MetaMask
- Ethers.js
- HTML
- CSS
- JavaScript

## Features

- Admin authentication through wallet
- Add candidates
- Start election
- End election
- Cast votes
- Prevent double voting
- View election results
- Blockchain-based vote storage

## Architecture

Frontend
↓
Ethers.js
↓
MetaMask
↓
Smart Contract
↓
Hardhat Blockchain

## How to Run

1. Install dependencies

npm install

2. Start blockchain

npx hardhat node

3. Deploy contract

npx hardhat run scripts/deploy.ts --network localhost

4. Start frontend using Live Server

5. Connect MetaMask to Hardhat Local

## Network

RPC:
http://127.0.0.1:8545

Chain ID:
31337
