//start of code 
const hre = require("hardhat");


async function main() {
const Project = await hre.ethers.getContractFactory("Project");
const project = await Project.deploy();

//project 
await project.deployed();
// Deployed Project

console.log(`Project deployed to: ${project.address}`);
}

//Main function 
main().catch((error) => {
console.error(error);
process.exitCode = 1;

});


//end



