// require("@nomiclabs/hardhat-waffle");

// // This is a sample Hardhat task. To learn how to create your own go to
// // https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// // You need to export an object to set up your config
// // Go to https://hardhat.org/config/ to learn more

// /**
//  * @type import('hardhat/config').HardhatUserConfig
//  */
// module.exports = {
//   solidity: "0.8.4",
// };

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  netwoks: {
    ropsten: {
      url: '',    // alchemy의 프로젝트 생성 후 알려주는 주소, 리믹스 쓰면 어떤 주소를 넣어야하는지 몰겠음
      account: [''],  // metamask 의 private key
    }
  }
};