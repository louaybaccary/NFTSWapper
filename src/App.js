import logo from "./NFTLogo.jpg";
import "./App.css";
import "reactjs-popup/dist/index.css";
import Button from "@material-ui/core/Button";
import Modal from "react-modal";
import React from "react";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#282c34"
  },
};
// Modal.setAppElement("#yourAppElement");
function App() {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          The simpliest and safest place to Swap or trade your NFTs without Fees
          !
        </p>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            openModal();
          }}
        >
          Connect to a wallet
        </a>
        <Modal
          isOpen={modalIsOpen}
          //onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
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
                  <Button size="small" color="primary" >
                    Connect
                  </Button>
                </div>
              </div>
            </div>
            <Button size="small" color="secondary" onClick={()=>{
              closeModal()
            }}>
              Cancel
            </Button>
          </div>
        </Modal>
      </header>
    </div>
  );
}

export default App;
