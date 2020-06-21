import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card";
import Typography from "@material-ui/core/Typography";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import cStyles from "./Production.module.css";
import { news } from "../../../components/News/news";
import { actions } from "../../../components/Actions/actions";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const newStyles = {
    padding: "10px",
  };
  const extendable = {
    maxWidth: "auto",
    margin: "5px",
    overflow: "hidden",
  };
  const cardsGrid = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    },
    children: {
      maxWidth: "auto",
      margin: "5px",
      overflow: "hidden",
    },
    left: {
      ...extendable,
      background: "rgba(128, 128, 128, .1)",
    },
    right: {
      ...extendable,
      background: "rgba(128, 128, 128, .8)",
    },
    blankLine: {
      height: "4px",
      width: "15%",
      background: "#02a89e",
    },
  };
  const newsContent =
    "here we will put the content of" +
    " the news thing as we need it to be having full description";
  let actionsArr = [];
  for (let i = 0; i < 4; i++) {
    actionsArr.push(
      <div style={cardsGrid.children}>
        <Card>
          {actions(
            "HEADER OF THE ACTION",
            "Content To be placed",
            require("assets/img/resilient.jpg")
          )}
        </Card>
      </div>
    );
  }
  return (
    <div>
      <GridContainer justify="center" className={classes.section}>
        <GridItem xs={12} sm={12} md={8}>
          <Typography variant="h5" color="textPrimary">
            {" "}
            Our Motto{" "}
          </Typography>
          <Typography variant="body1" color="textPrimary">
            Here goes the about us of Resilient Voices
          </Typography>
        </GridItem>
      </GridContainer>

      <GridContainer className={cStyles.gridContainer}>
        {/* the first grid item */}
        <GridItem xs={12} sm={12} md={4} className={cStyles.leftSide}>
          <h2 style={{ color: "black", margin: "0" }}>News</h2>
          <div style={cardsGrid.blankLine}> </div>
          <Card>
            <div style={newStyles}>{news("Testing title", newsContent)}</div>
          </Card>
          <Card>
            <div style={newStyles}>{news("Testing title", newsContent)}</div>
          </Card>
          <Card>
            <div style={newStyles}>{news("Testing title", newsContent)}</div>
          </Card>
          <Card>
            <div style={newStyles}>{news("Testing title", newsContent)}</div>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={8} className={cStyles.rightSide}>
          <h2 style={{ color: "black", margin: "0" }}>Actions</h2>
          <div style={cardsGrid.blankLine}> </div>
          <div style={cardsGrid.container}>{actionsArr}</div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
