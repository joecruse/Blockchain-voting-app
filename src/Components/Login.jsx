import React from "react";

const Login = (props) => {
    return (
        <div className="login-container">
            <h1 className="welcome-message"> BlockChain Voting Application</h1>
            <button className="login-button" onClick = {props.connectWallet}>Press Enter to Vote</button>
        </div>
    )
}

export default Login;