import React from "react";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 100,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  },
  image: {
    flex: "0 1 40%",
    "max-width": "40%",
    "max-height": "40%",
    "object-fit": "scale-down",
    "align-self": "center"
  },
  container: {
    display: "flex",
    "justify-content": "space-between"
  },
  textContainer: {
    display: "flex",
    "flex-direction": "column",
    "align-content": "space-between",
    "justify-content": "space-between",
    flex: "0 1 40%"
  },
  button:{
    "background-color": "#ee447d",
    color: "white"
  }
});

function SimpleModal(props) {
  const { classes } = props;
  const id = props.match.params.id;

  const close = () => {
    props.close()
    props.history.push(props.match.params.url);
  }
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.isOpen}
      onClose={close}
    >
      <div style={getModalStyle()} className={classes.paper}>
        <div className={classes.container}>
          <img
            src={props.data[id].url}
            className={classes.image}
            alt="Product"
          />

          <div className={classes.textContainer}>
            <div>
              <Typography variant="h6" id="modal-title">
                {props.data[id].title}
              </Typography>
            </div>
            <div>
              <Button variant="contained" className={classes.button}>
                Buy Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default withStyles(styles)(withRouter(SimpleModal));
