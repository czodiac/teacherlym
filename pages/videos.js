import React from "react";
// nodejs divbrary that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// core components
import YouTube from "react-youtube";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "styles/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function VideoPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const opts = {
    height: "563",
    width: "1000",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div>
      <Header
        color="transparent"
        brand="West Hillhurst Piano and Violin"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 50,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image="/img/profile-bg.jpg" />
      <div
        className={classNames(classes.main, classes.mainRaised, classes.center)}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div className={classes.name}>
                  <h3 className={classes.title}>Lym's Studio</h3>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <h4>Promise of Love - 02:26</h4>
          <h6>Both piano and violin played by Lym</h6>
          <YouTube videoId="4yui7AnClxk" opts={opts} />
          <br />
          <h4>La vie en rose - 01:47</h4>
          <h6>Both piano and violin played by Lym</h6>
          <YouTube videoId="v5jO4nblLkw" opts={opts} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
