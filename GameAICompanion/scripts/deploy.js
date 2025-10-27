async function main() {
  const GameAI = await ethers.getContractFactory("GameAICompanion");
  const gameAI = await GameAI.deploy();
  await gameAI.deployed();
  console.log("GameAICompanion deployed to:", gameAI.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
