const hre = require("hardhat")

const main = async () => {
    const Transactions = await hre.ethers.getContractFactory("Transactions")
    const transcations = await Transactions.deploy()

    await transcations.waitForDeployment()

    console.log("Transactions deployed to: ", await transcations.getAddress())
}

const runMain = async () => {
    try {
        await main()
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

runMain()