import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractAbi, contractAddress } from './Constant/constant';
import Login from './Components/Login';
import Finished from './Components/Finished';
import Connected from './Components/Connected';
import './App.css';

function App() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [votingStatus, setVotingStatus] = useState(true);
  const [remainingTime, setremainingTime] = useState('');
  const [candidates, setCandidates] = useState([]);
  const [number, setNumber] = useState('');
  const [CanVote, setCanVote] = useState(true);
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    getCandidates();
    getRemainingTime();
    getCurrentStatus();
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    };
  }, []);

  useEffect(() => {
    if (remainingTime === 0) {
      getCandidates();
    }
  }, [remainingTime]);

  async function vote() {
    // Create a new Ethereum provider
    // Request access to the user's Ethereum accounts
    // Get the signer (the user's Ethereum account) from the provider
    // Create a new contract instance using the contract address, ABI, and the signer
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );

    const tx = await contractInstance.vote(number);
    await tx.wait();
    canVote();
    getCandidates(); // Refresh the candidates after a successful vote
  }

  async function canVote() {
    // Create a new Ethereum provider
    // Request access to the user's Ethereum accounts
    // Get the signer (the user's Ethereum account) from the provider
    // Create a new contract instance using the contract address, ABI, and the signer
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );
    const voteStatus = await contractInstance.voters(await signer.getAddress());
    setCanVote(voteStatus);
  }

  async function getCandidates() {
    // Create a new Ethereum provider
    // Request access to the user's Ethereum accounts
    // Get the signer (the user's Ethereum account) from the provider
    // Create a new contract instance using the contract address, ABI, and the signer
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );
    const candidatesList = await contractInstance.getAllVotesOfCandiates();
    const formattedCandidates = candidatesList.map((candidate, index) => {
      return {
        index: index,
        name: candidate.name,
        voteCount: candidate.voteCount.toNumber(),
      };
    });
    setCandidates(formattedCandidates);
    determineWinners(formattedCandidates);
  }

  async function getCurrentStatus() {
    // Create a new Ethereum provider
    // Request access to the user's Ethereum accounts
    // Get the signer (the user's Ethereum account) from the provider
    // Create a new contract instance using the contract address, ABI, and the signer
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );
    const status = await contractInstance.getVotingStatus();
    console.log(status);
    setVotingStatus(status);
  }

  async function getRemainingTime() {
    // Create a new Ethereum provider
    // Request access to the user's Ethereum accounts
    // Get the signer (the user's Ethereum account) from the provider
    // Create a new contract instance using the contract address, ABI, and the signer
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const contractInstance = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );
    const time = await contractInstance.getRemainingTime();
    const remainingSeconds = time.toNumber();
    const remainingMinutes = Math.floor(remainingSeconds / 60);
    const remainingSeconds_mod = remainingSeconds % 60;
    setremainingTime(`${remainingMinutes}:${remainingSeconds_mod.toString().padStart(2, '0')}`);
  }
  
  

  // Initialize variables to keep track of the maximum number of votes
  // and the number of candidates with the maximum number of votes
  function determineWinners(candidates = []) {
    let maxVotes = 0;
    let winnerCount = 0;
    const winners = [];

    for (let i = 0; i < candidates.length; i++) {
      if (candidates[i].voteCount > maxVotes) {
        maxVotes = candidates[i].voteCount;
        winnerCount = 1;
        winners.length = 0;
        winners.push(candidates[i]);
      } else if (candidates[i].voteCount === maxVotes) {
        winnerCount++;
        winners.push(candidates[i]);
      }
    }

    setWinners(winners);
  }

  // Check if there are any Ethereum accounts available
  // If there are accounts and the current account is different from the first account in the list,
  // update the application state with the new account address
  function handleAccountsChanged(accounts) {
    if (accounts.length > 0 && account !== accounts[0]) {
      setAccount(accounts[0]);
      // Call the `canVote`
      canVote();
    } else {
      setIsConnected(false);
      setAccount(null);
    }
  }

  // Check if the window.ethereum object is available
  // Create a new Ethereum provider
  // Set the provider in the application state
  // Request access to the user's Ethereum accounts
  // Get the signer (the user's Ethereum account) from the provider
  // Get the user's Ethereum address
  // Set the user's Ethereum address in the application state
  // Log the connected Ethereum address to the console
  // Set the connection status in the application state
  async function connectToMetamask() {
    
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        console.log("Metamask Connected : " + address);
        setIsConnected(true);
        canVote();
      } catch (err) {
        console.error(err);
      }
    } else {
      console.error("Metamask is not detected in the browser");
    }
  }
  // Get the value of the input field that triggered the event
  // Update the 'number' state with the new value
  async function handleNumberChange(e) {
    setNumber(e.target.value);
  }

  return (
    <div className="App">
      {votingStatus ? (
        isConnected ? (
          <Connected
            account={account}
            candidates={candidates}
            remainingTime={remainingTime}
            number={number}
            handleNumberChange={handleNumberChange}
            voteFunction={vote}
            showButton={CanVote}
          />
        ) : (
          <Login connectWallet={connectToMetamask} />
        )
      ) : (
        <Finished winners={winners} />
      )}
    </div>
  );
}

export default App;
