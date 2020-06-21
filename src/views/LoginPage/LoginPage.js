import React from "react";

//core components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GalleryCard from "../../components/GalleryCard/GalleryCard";
import Parallax from "../../components/Parallax/Parallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import themeStyles from "assets/jss/material-kit-react/views/landingPage.js";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const useStyles = makeStyles(themeStyles);
const dashboardRoutes = [];
const styles = {
  container: {
    overflow: "hidden",
  },
  elevatedCard: {
    padding: "60px 0px 20px 0px",
  },
};

export default function LoginPage() {
  const classes = useStyles();
  return (
    <div style={styles.container}>
      <Header
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        color="transparent"
        routes={dashboardRoutes}
        brand="Resilient Voices Foundations"
        fixed
      />
      <Parallax filter image={require("assets/img/resilient.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Resilient Voices Foundation</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container} style={styles.elevatedCard}>
          {GalleryCard(
            require("assets/img/team1.jpg"),
            "#e5e5e5",
            "The boldness in them",
            "true"
          )}

          {GalleryCard(
            require("assets/img/team2.jpg"),
            "white",
            "we stand together"
          )}

          {GalleryCard(
            require("assets/img/team3.jpg"),
            "#e5e5e5",
            "we have hope",
            "true"
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
