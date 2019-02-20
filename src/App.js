import React, { Component } from "react";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import ImageGrid from "./components/ImageGrid";
import SimpleModal from "./components/SimpleModal";
import Grid from "@material-ui/core/Grid";
import Navbar from "./components/Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";

const styles = {
  container1: {
    display: "flex",
    "margin-top": "5%",
    width: "100%",
    "justify-content": "center"
  },
  container2: {
    display: "flex",
    "margin-top": "5%",
    width: "85%",
    "justify-content": "center"
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      data: "test",
      open: false
    };
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.props.history.push("/personalised-cards");
    this.getData();
  }

  async getData() {
    let resp = await fetch(
      "https://txclo3byr1.execute-api.eu-west-1.amazonaws.com/moonpig/items"
    );
    let parsed = await resp.json();
    const data = {};
    parsed.Products.map(item => {
      data[item.MoonpigProductNo] = {
        url: item.ProductImage.Link.Href,
        title: item.Title,
        seo: item.ProductCategoryGroupSeoPath
      };
    });

    this.setState({ data: data });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.history.goBack();
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Navbar />
        <div className={classes.container1}>
          <div className={classes.container2}>
            <div>
              <Route
                path="/:seoPath/"
                render={props => (
                  <ImageGrid
                    tileData={this.state.data}
                    open={this.handleOpen}
                    isOpen={this.state.open}
                    close={this.handleClose}
                  />
                )}
              />
            </div>
            <Route
              path="/:seoPath/:id"
              render={props => (
                <SimpleModal
                  isOpen={this.state.open}
                  close={this.handleClose}
                  data={this.state.data}
                />
              )}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(withRouter(App));
