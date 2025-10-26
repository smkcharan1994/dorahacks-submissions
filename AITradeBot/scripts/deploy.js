async function main() {
  const AITradeBot = await ethers.getContractFactory("AITradeBot");
  const bot = await AITradeBot.deploy();
  await bot.deployed();
  console.log("AITradeBot deployed to:", bot.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
