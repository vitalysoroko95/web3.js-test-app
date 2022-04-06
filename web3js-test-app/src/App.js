import "./App.css";
import { injected } from "./components/wallet/connectors";
import { useWeb3React } from "@web3-react/core";

function App() {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connect() {
    console.log("connect");
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div className="App">
      <button onClick={connect}>Get public key</button>
      {active ? (
        <span>
          Connected with <b>{account}</b>
        </span>
      ) : (
        <span>MetaMask is locked - please login</span>
      )}
    </div>
  );
}

export default App;
