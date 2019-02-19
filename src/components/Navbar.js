import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  flex: {
    display: "flex"
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
  bar:{
      "background-color": "#ee447d"
  }
});

const NavBar = props => {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <Typography variant="title" color="inherit">
                Moonpig
              </Typography>
            </Grid>
            <Grid item>
              <div className={classes.flex}>
                <Button color="inherit" varient="contained">
                  <Link className={classes.link} to="/personalised-cards">
                    Cards{" "}
                  </Link>
                </Button>

                <Button color="inherit" varient="contained">
                  <Link className={classes.link} to="/gifts">
                    Gifts
                  </Link>
                </Button>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(NavBar);
