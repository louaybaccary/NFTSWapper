
import React from 'react';

import Button from "@material-ui/core/Button";



export default class WalletChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
        <div
        style={{
          borderWidth: 10,
          borderColor: "white",
        }}
      >
      
        <h1>Metamask</h1>
        <div
          style={{
            borderColor: "black",
            borderRadius: "12px",
            borderWidth:10
          }}
        >
          <Button size="small" color="primary">
            Connect
          </Button>
        </div>
      </div>
    );
  }
}
