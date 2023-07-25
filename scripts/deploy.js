
const hre = require("hardhat");

async function main() {
  const Chai = await hre.ethers.getContractFactory("chai"); //fetching bytecode and ABI
  const chai = await Chai.deploy(); //creating an instance of our smart contract

  await chai.deployed();//deploying your smart contract

  console.log("Deployed contract address:",`${chai.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


//0xdA6F3F6DDe3e3CBE0a3148c162F1dAF4b2f171Ee
//0xD51c00E4118Ee7a928660C240Dfa1fa780b18446