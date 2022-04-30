const main = async () => {

  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

const runMain = async() => {
  try{
    main();
    process.exit(0);
  } catch(error) {
    console.error(error);
    process.exit(1);
  }
}

runMain();


// hardhat.config.js 맞춰주고 npx hardhat run script/deploy.js --network ropsten 해주면 배포됨
// 그때 나오는 transactions.address 가 프론트에서 사용할 주소
