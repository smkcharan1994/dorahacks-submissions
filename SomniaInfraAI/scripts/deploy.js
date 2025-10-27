const hre = require("hardhat");

async function main() {
  const InfraAgent = await hre.ethers.getContractFactory("InfraAgent");
  const agent = await InfraAgent.deploy();
  await agent.deployed();

  console.log("InfraAgent deployed to:", agent.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
