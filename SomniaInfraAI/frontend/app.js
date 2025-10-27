async function fetchStatus() {
  const res = await fetch("http://localhost:8000/health");
  const data = await res.json();
  document.getElementById("status").innerText = `Uptime: ${data.uptime} | Status: ${data.status}`;
}
fetchStatus();
