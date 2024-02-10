// Home.js
import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import landing from "./assets/landingo.svg"

//import {ethers} from "ethers";
// import { Button, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

function Home() {

  const [isConnected, setIsConnected] = useState(false);
  const [connectButton, setConnectButton] = useState('Connect to MetaMask');
  const [account, setAccount] = useState(null);

  const navigate = useNavigate();

  const handleConnect = async () => {
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    setAccount(accounts[0]);
    setConnectButton(accounts[0].slice(0, 5) + "..." + accounts[0].slice(-5));
    setIsConnected(true);
    // setConnectButton("Connecting...");
    return;
  }

  function handleListRoute() {
    navigate("/list")
  }
  function handleListBidRoute() {
    navigate("/list-bid")
  }
  return (<>
    <header className="header">
      <h1>FindAGig</h1>
      <div className="account-info">
        {
          isConnected && <button className="connect_button">
            {connectButton}{' -->'}</button>
        }
        {
          !isConnected &&
          <button className="connect_button" onClick={handleConnect}>{connectButton}</button>
        }
      </div>
    </header>
    <div className="home">
      <div className="home-img">
        <img src={landing}></img>
      </div>
      <div className="home-body">
        <div className="home-body-text">
          <div className="home-body-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, ab.
          </div>
          <div className="home-body-main-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illo autem quaerat optio, perferendis quo non maiores nulla repudiandae suscipit fugiat quisquam aspernatur officiis voluptatibus nisi dolor! Maiores, pariatur quia?
          </div>
        </div>
        <main className="content">
          {!isConnected ? (
            <div className="centered-content">
              <button onClick={handleConnect}>Connect Wallet</button>
            -</div>
          )
            : isConnected && (
              <div className="centered-content">
                <button onClick={handleListRoute}>List of Listed Projects</button>
                <button onClick={handleListBidRoute}>List a Bid</button>
              </div>
            )}

        </main>
      </div>

    </div>
  </>

  );
}

export default Home;
