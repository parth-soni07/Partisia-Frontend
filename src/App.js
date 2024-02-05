import "./App.css";
import React from "react";
// import detectEthereumProvider from "@metamask/detect-provider";
import { MetaMaskButton } from "@metamask/sdk-react-ui";

// const handleClick = async () => {
//   const provider = await detectEthereumProvider();
//   console.log(provider)
//   if (provider) {
//     // From now on, this should always be true:
//     // provider === window.ethereum
//     startApp(provider); // initialize your app
//   } else {
//     console.log("Please install MetaMask!");
//   }
// };
// async function startApp(provider) {
//   // If the provider returned by detectEthereumProvider isn't the same as
//   // window.ethereum, something is overwriting it – perhaps another wallet.
//   if (provider !== window.ethereum) {
//     console.error("Do you have multiple wallets installed?");
//   }
//   await window.ethereum.request({
//     method: "eth_requestAccounts",
//   });
//   // Access the decentralized web!
// }
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <article>
          <h1>
            {/* <MetaMaskButton theme={"light"} color="white"></MetaMaskButton> */}
            <div class="button-container">
              <button type="button" className="secondary-button">
                List a Bid
              </button>
              <button type="button" className="secondary-button">
                Make a Bid
              </button>
            </div>
          </h1>
        </article>
      </header>
    </div>
  );
}

export default App;
