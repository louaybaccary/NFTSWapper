import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Card
          style={{
            borderWidth: 10,
            borderColor: "white",
          }}
          className={classes.root}
        >
          <CardActionArea>
            <CardContent>
              <h4>Metamask</h4>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Connect
            </Button>
          </CardActions>
        </Card>
        <Card
          style={{
            borderWidth: 10,
            borderColor: "white",

          }}
          className={classes.root}
        >
          <CardActionArea>
            <CardContent>
              <h4>WalletConnect</h4>
            </CardContent>
          </CardActionArea>
          <CardActions>
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
          </CardActions>
        </Card>
      </div>

      <Button size="small" color="primary">
        Cancel
      </Button>
    </div>
  );
}
