import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/team1.jpg";
import team2 from "assets/img/team3.jpg";
import team3 from "assets/img/team2.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const image = {
    container: {
      height: "200px",
      width: "200px",
      overflow: "hidden",
    },
    img: {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    }
  }
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Our Leadership Team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <div style={image.container}>
                  <img style={image.img} src={team1} alt="..." className={imageClasses} />
                </div>
              </GridItem>
              <h4 className={classes.cardTitle}>
                Jordan Richard
                <br />
                <small className={classes.smallTitle}>Chairperson</small>
              </h4>
              {/* <CardBody>
                <p className={classes.description}>
                  Emanuel Sanga joined this organization in 2019 and became its
                  leader in 2020...
                </p>
              </CardBody> */}
              {/* <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter> */}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <div style={image.container}>
                  <img style={image.img} src={team2} alt="..." className={imageClasses} />
                </div>
              </GridItem>
              <h4 className={classes.cardTitle}>
                Nourah Ahmed Seif
                <br />
                <small className={classes.smallTitle}>Secretary General</small>
              </h4>
              {/* <CardBody>
                <p className={classes.description}>
                  Peter Machele is a skilled secretary who has worked as a
                  general secretary for all his professional carrier, He has a
                  good professional skills that make him suitable for the task
                </p>
              </CardBody> */}
              {/* <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter> */}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <div style={image.container}>
                  <img style={image.img} src={team3} alt="..." className={imageClasses} />
                </div>
              </GridItem>
              <h4 className={classes.cardTitle}>
                Mtegeki Richard Buto
                <br />
                <small className={classes.smallTitle}>
                  Accountant
                </small>
              </h4>
              {/* <CardBody>
                <p className={classes.description}>
                  Tevin Mollel is an experienced secretary who has worked for different NGO's both profit and non-profit
                </p>
              </CardBody> */}
              {/* <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter> */}
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
