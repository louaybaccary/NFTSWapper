import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo from "./logo.svg";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Authentification() {
  const classes = useStyles();

  return (
    <div
      style={{
        borderWidth: 10,
        borderColor: "white",
      }}
    >
      <img src={logo} alt="Logo" />
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
