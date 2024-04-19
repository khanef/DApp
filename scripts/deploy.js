const hre = require('hardhat')

async function main(){
    const lock = await hre.ethers.getContractFactory("Lock");
    const Lock = await lock.deploy();

    await Lock.deployed();

    console.log(
        `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
    );
}

main().catch((error) => {
    console.log(error);
    process.exitCode = 1;
})