# CrowdHolding's YUP token

## Prerequisites
  - any Ethereum client (e.g. Parity)
  - Node.js 8.x
  - npm v5.x
  - ganache-cli v6.x (only for local deployment)

## Preparation
  - open terminal (let's call it MAIN)
  - cd into 'yupie-smartcontract' directory
  - execute command:
``npm install``
  - create truffle symlink:
``ln -T node_modules/trufle/build/cli.bundled.js truffle``
  - compile contracts:
``./truffle compile``
  - edit ./truffle.js
    * fill in path to the IPC provider (*.ipc "file")
    * optionally edit gPrice and gLimit values
  - edit ./migrations/2_deploy_token.js
    * fill in missing addresses (only for ropsten deployment)

## Deploying to ganache-cli (TestRPC)
  - open separate console or console tab and run ganache-cli:
``ganache-cli -a 10 -p 8545``
  - from MAIN terminal, deploy token contract:
``./truffle migrate --network development``

## Deploying to Ropsten testnet
  - go to line 325900 in './node_modules/truffle/build/cli.bundled.js'
  - replace it with:
``var originalSendAsync = provider.send.bind(provider);``
  - save changes to './node_modules/truffle/build/cli.bundled.js'
  - run your preferred Ethereum client (e.g. Parity)
  - deploy token contract (from MAIN terminal)
``./truffle migrate --network ropsten -f 2``
(disregard Truffle error upon deployment, check https://ropsten.etherscan.io/tx/[TXHASH])
