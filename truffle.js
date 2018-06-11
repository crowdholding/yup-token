const Web3 = require('web3');
const net = require('net');

// Configuration parameters (change values as necessary)
const ipc = ''; //path to IPC provider
const gPrice = 20000000000; //20 Gwei
const gLimit = 3700000; //3.7M gas limit
// Configuration end

module.exports = {
  networks: {
  	development: {
  		host: "localhost",
  		port: 8545,
  		network_id: "*"
  	},
  	ropsten: {
  	    provider: function() {
  	        return new Web3.providers.IpcProvider(ipc, net);
  	    },
  	    network_id: 3,
  	    gasPrice: gPrice,
  	    gas: gLimit
  	}
  }
};
