const Voting = artifacts.require("Voting");

contract("Voting", (accounts) => {
    let votingInstance;

    beforeEach(async () => {
        const candidateNames = ["Candidate A", "Candidate B", "Candidate C"];
        const durationInMinutes = 10;
        votingInstance = await Voting.new(candidateNames, durationInMinutes, { from: accounts[0] });
    });

    afterEach(async () => {
        // Perform cleanup tasks here if necessary
    });

    it("should add candidates correctly", async () => {
        const candidates = await votingInstance.getAllVotesOfCandiates();
        assert.equal(candidates.length, 3, "Candidate count should be 3");
    });

    it("should allow voting", async () => {
        await votingInstance.vote(0, { from: accounts[1] });
        const candidateVotes = await votingInstance.getAllVotesOfCandiates();
        assert.equal(candidateVotes[0].voteCount, 1, "Candidate A should have 1 vote");
    });

    it("should not allow multiple votes from the same user", async () => {
        await votingInstance.vote(0, { from: accounts[1] });
        try {
            await votingInstance.vote(1, { from: accounts[1] });
            assert.fail("Multiple votes from the same user should not be allowed");
        } catch (error) {
            assert.include(error.message, "You have already voted", "Error message should include 'You have already voted'");
        }
    });

    async function advanceTime(seconds) {
        await web3.currentProvider.send({
            jsonrpc: "2.0",
            method: "evm_increaseTime",
            params: [seconds],
            id: new Date().getSeconds()
        });
        await web3.currentProvider.send({
            jsonrpc: "2.0",
            method: "evm_mine",
            params: [],
            id: new Date().getSeconds() + 1 // Increment the id to avoid potential conflicts
        });
    }
});
