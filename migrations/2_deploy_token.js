const YUPToken = artifacts.require('./NYToken.sol');

var presaleFund, crowdsaleFund, bountyFund, seedFund, reserveFund, teamFund, futureFund;


module.exports = function(deployer, network, accounts) {
    if (network == 'ropsten') {
        // Configure NYToken constructor args
        owner = '';         //fill in address
        presaleFund = '';   //fill in address
        crowdsaleFund = ''; //fill in address
        bountyFund = '';    //fill in address
        seedFund = '';      //fill in address
        reserveFund = '';   //fill in address
        teamFund = '';      //fill in address
        futureFund = '';    //fill in address
        // Configuration end

        if (!owner || !presaleFund || !crowdsaleFund || !bountyFund || !seedFund || !reserveFund || !teamFund || !futureFund) {
            console.error('Encountered error while trying to deploy to Ropsten testnet!');
            console.error('Reason: one or more account address(es) is/are not set!');
            process.exit(1);
        }
    } else if (network == 'development') {
        //Configure NYToken constructor args
        owner = accounts[0];
        presaleFund = accounts[1];
        crowdsaleFund = accounts[2];
        bountyFund = accounts[3];
        seedFund = accounts[4];
        reserveFund = accounts[5];
        teamFund = accounts[6];
        futureFund = accounts[7];
    }
    
    //Contracts deployment
    deployer.deploy(YUPToken, presaleFund, crowdsaleFund, bountyFund,
            seedFund, reserveFund, teamFund, futureFund, {from: owner})
    .then(function() {
        console.log('========> Token contract deployed <========');
    })
    .catch(function(err) { console.error(err); });
}
