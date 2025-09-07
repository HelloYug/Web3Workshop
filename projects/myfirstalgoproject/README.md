# 📚 StudyTracker dApp (Algorand)

A simple and beginner-friendly decentralized application (dApp) built on **Algorand** to help students track their study hours on the blockchain.  

https://lora.algokit.io/testnet/application/745512582
![WhatsApp Image 2025-09-07 at 20 22 04_4057e74f](https://github.com/user-attachments/assets/21cd4946-7090-477d-af87-6453f9000b40)

---

## 🚀 Project Description

The **StudyTracker** is a smart contract deployed on the Algorand blockchain.  
It allows students (or anyone!) to **log study hours**, **check their total time**, and **reset progress**.  
By storing data on the blockchain, study records become **secure, transparent, and immutable**.  

This is a **learning-oriented project**—perfect for beginners exploring blockchain development with Algorand and TypeScript.  

---

## ✅ What it does

- Keeps track of your total study hours in a blockchain-powered global state.  
- Lets you **add study hours** as you go.  
- Allows you to **reset** study hours when starting fresh.  
- Fetches your **current total study hours** instantly.  

---

## ✨ Features

- 🔒 **Blockchain-backed storage** → Hours are securely saved on Algorand.  
- ⏱️ **Track progress** → Add hours anytime you study.  
- 🔄 **Reset option** → Start over when needed.  
- 📊 **Transparency** → Anyone can verify study logs on-chain.  
- 🛠️ **Beginner-friendly codebase** → Written in TypeScript with clear functions.  

---

## 🔗 Deployed Smart Contract

Contract Address: **XXX**  
*(Replace `XXX` with your deployed smart contract link when ready.)*  

---

## 📂 Code (Smart Contract)

```ts
import { Contract, GlobalState, uint64 } from "@algorandfoundation/algorand-typescript";

export class StudyTracker extends Contract {
  // Global state: stores total study hours
  totalHours = GlobalState<uint64>({ key: "totalHours", initialValue: 0 });

  // Add study hours
  addHours(hours: uint64): uint64 {
    this.totalHours.value += hours;
    return this.totalHours.value;
  }

  // Reset study hours
  resetHours(): string {
    this.totalHours.value = 0;
    return "Study hours reset successfully!";
  }

  // Get current study hours
  getHours(): uint64 {
    return this.totalHours.value;
  }
}

````

---

## 🛠️ How to Use (Beginner Steps)

1. Clone this repo:

   ```bash
   git clone https://github.com/your-username/study-tracker-algorand.git
   cd study-tracker-algorand
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Compile & deploy the contract (make sure you have Algorand Sandbox or a wallet set up).

4. Interact with the contract:

   * **Add hours** → Call `addHours(hours)`
   * **Get hours** → Call `getHours()`
   * **Reset hours** → Call `resetHours()`

---

## 🌱 Inspiration

Tracking productivity can be boring. By using blockchain, we make it **fun, secure, and verifiable**.
This project is a simple starting point—you can expand it into a **full-fledged productivity tracker dApp**.

---

## 📜 License

MIT License © 2025
