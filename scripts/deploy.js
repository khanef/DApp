const hre = require('hardhat')

async function deployChatApp(){
    const ChatApp = await hre.ethers.getContractFactory("ChatApp");
    const chatApp = await ChatApp.deploy();

    await chatApp.waitForDeployment();

    console.log(
        `Contract address: ${chatApp.address}`
    );
}

deployChatApp().catch((error) => {
    console.log(error);
    process.exitCode = 1;
})