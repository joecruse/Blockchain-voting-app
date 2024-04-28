// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        string name;
        uint256 voteCount;
    }
    address owner;
    Candidate[] public candidates;
    mapping(address => bool) public voters;
    bool public resultsPublished;

    uint256 public votingStart;
    uint256 public votingEnd;

    constructor(string[] memory _candidateNames, uint256 _durationInMinutes) {
        for (uint256 i = 0; i < _candidateNames.length; i++) {
            candidates.push(Candidate({
                name: _candidateNames[i],
                voteCount: 0
            }));
        }
        owner = msg.sender;
        votingStart = block.timestamp;
        votingEnd = block.timestamp + (_durationInMinutes * 1 minutes);
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }

    function addCandidate(string memory _name) public onlyOwner {
        candidates.push(Candidate({
            name: _name,
            voteCount: 0
        }));
    }

    function vote(uint256 _candidateIndex) public {
        require(!voters[msg.sender], "You have already voted.");
        require(_candidateIndex < candidates.length, "Invalid candidate index.");

        // Check if the voting period has ended
        require(block.timestamp < votingEnd, "Voting period has ended");

        candidates[_candidateIndex].voteCount++;
        voters[msg.sender] = true;

        // Check if the current time exceeds the end time, and publish results if so
        
    }

    function getAllVotesOfCandiates() public view returns (Candidate[] memory) {
        return candidates;
    }

    function getVotingStatus() public view returns (bool) {
        return (block.timestamp >= votingStart && block.timestamp < votingEnd);
    }

    function getRemainingTime() public view returns (uint256) {
        require(block.timestamp >= votingStart, "Voting has not started yet.");
        if (block.timestamp >= votingEnd) {
            return 0;
        }
        return votingEnd - block.timestamp;
    }



    function getWinners() public view returns (Candidate[] memory) {
      
        uint256 maxVotes = 0;
        uint256 winnerCount = 0;
        for (uint256 i = 0; i < candidates.length; i++) {
            if (candidates[i].voteCount > maxVotes) {
                maxVotes = candidates[i].voteCount;
                winnerCount = 1;
            } else if (candidates[i].voteCount == maxVotes) {
                winnerCount++;
            }
        }
        Candidate[] memory winners = new Candidate[](winnerCount);
        uint256 index = 0;
        for (uint256 i = 0; i < candidates.length; i++) {
            if (candidates[i].voteCount == maxVotes) {
                winners[index] = candidates[i];
                index++;
            }
        }
        return winners;
    }
}