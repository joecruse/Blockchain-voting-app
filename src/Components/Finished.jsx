import React from "react";

const Finished = (props) => {
  const { winners } = props;
  // Calculate total number of votes
  const totalVotes = winners.reduce((acc, winner) => acc + winner.voteCount, 0);

  return (
    <div className="login-container">
      <h1 className="welcome-message">Voting is Finished</h1>
      {totalVotes > 0 ? (
        <div className="winners-container">
          <h2>Winners</h2>
          <ul className="winners-list">
            {winners.map((winner, index) => (
              <li key={index} className="winner-item">
                <div className="winner-name">{winner.name}</div>
                <div className="winner-votes">Votes: {winner.voteCount}</div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="no-winners-message">No Winner is declared.</div>
      )}
    </div>
  );
};

export default Finished;
