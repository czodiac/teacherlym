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
      <Header rightLinks={<HeaderLinks />} fixed {...rest} />
      <Parallax small filter image="/img/bg8.jpg" />
      <div
        className={classNames(classes.main, classes.mainRaised, classes.center)}
      >
        <div className={classes.container}>
        <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div className={classes.name}>
                  <h3 className={classes.title}>Lym's Video</h3>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <YouTube videoId="1RWD7yMxlTA" opts={opts} />
            Lym can be seen at 1:59 & 2:43 in the above video clip when viewed
            in full screen.
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div className={classes.name}>
                  <h3 className={classes.title}>Student Video</h3>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <YouTube videoId="tTrwSdU9B84" opts={opts} />
          <br />
          <YouTube videoId="qLFtiyCBWfc" opts={opts} />
          <br />
          <YouTube videoId="Spp8tlvlMxc" opts={opts} />
          <br />
          <YouTube videoId="GcEJTZ1XGJ8" opts={opts} />
          <br />
          <YouTube videoId="PZelpcdYjL4" opts={opts} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
