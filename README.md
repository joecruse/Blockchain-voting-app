
**SecureVote** - A Blockchain-Powered Decentralized Voting Platform
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. Developed a decentralized voting platform leveraging Ethereum blockchain, smart contracts (Solidity), and a user-friendly React frontend integrated with MetaMask wallet and Ethers.js library for secure authentication and real-time updates.
2. Implemented version control (GitHub), smart contract deployment (Hardhat), testing (Remix), and collaborative coding (Visual Studio Code) to deliver a robust, transparent, and immutable voting solution.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
SMART CONTRACT TEST (METAMASK)
Prerequisites * Installation 

Install Node JS
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting. 
1.	Download Windows Installer. First, you need to download the Windows Installer (. msi) file from the official Node.
2.	Begin the Installation Process. Once you open and run the. msi file, the installation process begins. 
3.	Run Node. js Installation on Windows. 
4.	Verify Node. js Installation.
5.	Clone the repository.
6.	Run npm install.
    
Install MetaMask Extension
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. It allows users to access their Ethereum wallet through a browser extension or mobile app, which can then be used to interact with decentralized applications.
The MetaMask extension allows you to buy, send, spend, swap, and exchange your digital assets. Make payments to anyone, anywhere. Customize your wallet with community-built Snaps. Log into websites securely to trade assets, lend, borrow, play games, publish content, buy rare digital art, and so much more.
Download and install the official MetaMask extension (also known as a plugin or add-on) for your chosen browser. For most people, this is the Google Chrome extension or the Firefox addon.

SMART CONTRACT STEPS
Step 1: Create new wallet to your account.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1.	Click the ‘Get Started’ button to begin creating your Ethereum wallet using MetaMask.
2.	click the ‘Create a Wallet’ button.
3.	Click Export Private Key.
4.	Create a password.
5.	Click the "Confirm" button. 
   
Step 2: Add a network to MetaMask. 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. Click on the "Network Selector" button. (This will display a list of networks that you've added already.)
2. Click 'Add a network manually" to get started. MetaMask will open in a new tab in full screen mode.
3. Fill in the fields and click 'Save' to add the network.

Step 3. Once you're in MetaMask, connect to the Volta Test network. 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. Copy account ID & past into Volta. Go to https://voltafaucet.energyweb.org and enter your wallet address to get a token.
2. Make sure you perform the “I am not a robot” challenge before you request a token, otherwise you will get an error.
3. If your wallet is already connected to the Volta network, you will see your token balance in your wallet. 
   
Step 4. Generate private key. Click on account details, and you will see underneath the export private key option. Click there, and you will have to enter the password of your MetaMask wallet. Once entered, click on confirm and you will be able to see the private key. You can copy it to save it or export your account to other devices.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1.	Select Account.
2.	Open Account Details.
3.	Click Export Private Key.
4.	Enter your MetaMask password.
5.	Click the "Confirm" button 
6.	Copy your private key.

Step 5. VSCode Solidity support for Visual Studio code. Solidity is the language used in Ethereum to create smart contracts. 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1. Replace PRIVATE KEY from Volta in the .env file.
2. Replace CONTRACT_ADDRESS to blank.
 
Step 6. NPX Cmds. You first need to compile the contract and upload it to the blockchain network. Run the following commands to compile and upload the contract. 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
```shell
1.	npx hardhat compile
2.	npx hardhat run --network volta scripts/deploy.js
```
3.	Copy contract address and replace it in the constant.js 
 
Step 7. Npm Run Dev is a command commonly used in the development of Node. js applications and projects that employ npm as the package manager. It is used to execute specific scripts defined in the package. json file, particularly those scripts related to the dev. To start the dev server run the following cmd.
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1.	npm start.
2.	Click the “Next” button to connect to MetaMask.
3.	Click the “Connect” button to connect to the account. 
 
Step 8. Voting. Ethereum accounts to cast their votes, which will help in guaranteeing authenticity in the voting process. Election administrators are verified via smart contracts and they have the power to start and oversee the election process. 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1.	Click “Press Enter to Vote”. 
2.	Enter or select the index of the candidate’s name.
3.	Click the “Vote” button.
4.	Click the MetaMask extension. 
5.	Click the “Confirm” button. (give it some time to process).
6.	Refresh browser to see results.
 
Step 9. Re-voting. To vote again, create a new account and generate a new token. 
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1.	Click the MetaMask extension. 
2.	Click the original created account.
3.	Click the "Add new account" buttom. 
4.	Create name.
5.	Click the “Create” button.
6.	Run npx hardhat run --network volta scripts/deploy.js
7.	Redo step 5 and 8.

Step 10. Voting Results
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
1.	Click the MetaMask extension. 
2.	Refresh the web browser to see results. 
3.	If now one has voted, then you will have no winner displayed.

