async function main() {
  const PrivChain = await ethers.getContractFactory("PrivChain");
  const contract = await PrivChain.deploy();

  await contract.waitForDeployment();

  console.log("PrivChain deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
