const hre = require("hardhat");

async function main() {
  const AssetToken = await hre.ethers.getContractFactory("AssetToken");
  const assetToken = await AssetToken.deploy(1000000); // 1 million tokens
  await assetToken.deployed();
  console.log("AssetToken deployed to:", assetToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
