// Ethers 6, MetaMask + minimal ABI for SmartYieldBot
const provider = new ethers.BrowserProvider(window.ethereum);
let signer;
let contract;

const SMARTYIELD_ABI = [
  {"inputs":[],"stateMutability":"nonpayable","type":"constructor"},
  {"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"totalDeposited","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"percent","type":"uint256"}],"name":"simulateProfit","outputs":[],"stateMutability":"nonpayable","type":"function"}
];

const $ = id => document.getElementById(id);

async function connectWallet() {
  try {
    await provider.send("eth_requestAccounts", []);
    signer = await provider.getSigner();
    const address = await signer.getAddress();
    $("status").innerText = `Status: Connected (${address})`;
    log(`Connected: ${address}`);
  } catch (err) { log("Wallet connect failed: " + err); }
}

function setContractAddress() {
  const addr = $("contractAddress").value.trim();
  if (!ethers.isAddress(addr)) { log("Invalid contract address"); return; }
  contract = new ethers.Contract(addr, SMARTYIELD_ABI, signer || provider);
  log("Contract set: " + addr);
  refreshTotalDeposits();
}

async function deposit() {
  if (!contract) { log("Set contract address first"); return; }
  const value = $("depositAmount").value.trim();
  if (!value) { log("Enter amount in wei"); return; }
  try {
    const tx = await contract.connect(signer).deposit({ value: ethers.BigInt(value) });
    log("Deposit tx sent: " + tx.hash);
    await tx.wait();
    log("Deposit confirmed.");
    refreshTotalDeposits();
  } catch (err) { log("Deposit error: " + (err?.message || err)); }
}

async function withdraw() {
  if (!contract) { log("Set contract address first"); return; }
  const value = $("withdrawAmount").value.trim();
  if (!value) { log("Enter amount in wei"); return; }
  try {
    const tx = await contract.connect(signer).withdraw(ethers.BigInt(value));
    log("Withdraw tx sent: " + tx.hash);
    await tx.wait();
    log("Withdraw confirmed.");
    refreshTotalDeposits();
  } catch (err) { log("Withdraw error: " + (err?.message || err)); }
}

async function simulateProfit() {
  if (!contract) { log("Set contract address first"); return; }
  const percent = $("profitPercent").value.trim();
  if (!percent) { log("Enter percent"); return; }
  try {
    const tx = await contract.connect(signer).simulateProfit(parseInt(percent));
    log("simulateProfit tx sent: " + tx.hash);
    await tx.wait();
    log("simulateProfit confirmed.");
    refreshTotalDeposits();
  } catch (err) { log("simulateProfit error: " + (err?.message || err)); }
}

async function refreshTotalDeposits() {
  if (!contract) { $("totalDeposits").innerText = "Total Deposits: -"; return; }
  try {
    const val = await contract.totalDeposited();
    $("totalDeposits").innerText = `Total Deposits: ${val.toString()}`;
  } catch (err) { log("Read totalDeposits error: " + err); }
}

function log(msg) {
  const el = $("logs");
  const p = document.createElement("div");
  p.innerText = `[${new Date().toLocaleTimeString()}] ${msg}`;
  el.prepend(p);
}

window.addEventListener("load", () => {
  $("connectBtn").addEventListener("click", connectWallet);
  $("setAddressBtn").addEventListener("click", setContractAddress);
  $("depositBtn").addEventListener("click", deposit);
  $("withdrawBtn").addEventListener("click", withdraw);
  $("simulateBtn").addEventListener("click", simulateProfit);
  $("refreshBtn").addEventListener("click", refreshTotalDeposits);
});
