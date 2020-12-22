import logo from "./NFTLogo.jpg";
import "./App.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import MediaCard from "./mycard";
import WalletChoice from "./components/walletChoice";
import Button from "@material-ui/core/Button";

function App() {
  const contentStyle = { background: "#000" };
  const overlayStyle = { background: "rgba(0,0,0,0.5)" };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          The simpliest and safest place to Swap or trade your NFTs without Fees
          !
        </p>
        <Popup
          trigger={
            <a className="App-link" target="_blank" rel="noopener noreferrer">
              Connect to a wallet
            </a>
          }
          position="center center"
        >
             <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                borderWidth: 10,
                borderColor: "white",
              }}
            >
              <h5>Metamask</h5>
              <div
                style={{
                  borderColor: "black",
                  borderRadius: "12px",
                  borderWidth: 10,
                }}
              >
                <Button size="small" color="primary">
                  Connect
                </Button>
              </div>
            </div>
            <div
              style={{
                borderWidth: 10,
                borderColor: "white",
              }}
            >
              <h5>WalletConnect</h5>
              <div
                style={{
                  borderColor: "black",
                  borderRadius: "12px",
                  borderWidth: 10,
                }}
              >
                <Button size="small" color="primary">
                  Connect
                </Button>
              </div>
            </div>
          </div>
        </Popup>
      </header>
    </div>
  );
}

export default App;
