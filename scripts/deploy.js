async function main() {
  const Voting = await ethers.getContractFactory("Voting");

  // These are the params required for deploying the contract, The first param is Candidate name and the second one is the duration of the contract.
  const Voting_ = await Voting.deploy(["Joe", "Harshit", "Uday", "Dallas", "Khushi"], 10);
  console.log("Contract address:", Voting_.address);


}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });
