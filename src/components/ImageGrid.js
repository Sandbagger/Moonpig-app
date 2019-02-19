import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";


const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  margin: {
    width: "80%"
  },
  icon:{
    color: "#ee447d"
  }
});

function ImageGrid(props) {
  const getGridListCols = () => {
    if (isWidthUp("xl", props.width)) {
      return 5;
    }

    if (isWidthUp("lg", props.width)) {
      return 4;
    }

    if (isWidthUp("md", props.width)) {
      return 3;
    }

    return 2;
  };

  const { classes } = props;

  return (
    <div>
      <GridList
        cellHeight={300}
        cols={getGridListCols()}
        spacing={30}
        className={classes.root}
      >
        {Object.entries(props.tileData).map(tile => {
          const [id, data] = tile;

          if (`/${data.seo}` === `${props.match.url}/`) {
            return (
              <GridListTile key={id} cols={1}>
                <img src={data.url} alt={data.title} />
                <GridListTileBar
                  title={data.title}
                  actionIcon={
                    <Link to={`${data.seo}${id}`}>
                      <IconButton className={classes.icon} onClick={props.open}>
                        <InfoIcon />
                      </IconButton>
                    </Link>
                  }
                />
              </GridListTile>
            );
          }
        })}
      </GridList>
    </div>
  );
}

export default withStyles(styles)(withWidth()(withRouter(ImageGrid)));
