async function connectWallet() {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    document.getElementById("status").innerText = `Connected: ${accounts[0]}`;
  } else {
    alert("Install MetaMask to connect!");
  }
}
