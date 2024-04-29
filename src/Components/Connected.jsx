import React from "react";

const Connected = (props) => {
  return (
    <div className="connected-container">
      <h1 className="connected-header">You are now Connected to Metamask Volta Network</h1>
      <p className="connected-account">Voter Address Account: {props.account}</p>
      <div className="remaining-time-container">
        Contract Remaining Time: {props.remainingTime}
      </div>
      {props.showButton ? (
        <p className="connected-account">You have Voted.</p>
      ) : (
        <div>
          <input
            type="number"
            placeholder="Enter Candidate Index"
            value={props.number}
            onChange={props.handleNumberChange}
          />
          <br />
          <button
            className="login-button"
            style={{ margin: '0 auto', display: 'block' }}
            onClick={props.voteFunction}
          >
            Vote
          </button>
        </div>
      )}

      <table id="myTable" className="candidates-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Candidate name</th>
            <th>Number of Votes</th>
          </tr>
        </thead>
        <tbody>
          {props.candidates.map((candidate, index) => (
            <tr key={index}>
              <td>{candidate.index}</td>
              <td>{candidate.name}</td>
              <td>{candidate.voteCount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* {props.winners.length > 0 && (
        <div className="winners-container">
          <h2>Winners</h2>
          <ul>
            {props.winners.map((winner, index) => (
              <li key={index}>
                {winner.name} - Votes: {winner.voteCount}
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

export default Connected;
