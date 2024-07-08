import React from "react";
// nodejs divbrary that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import YouTube from "react-youtube";
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/profilePage.js";

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
      <Parallax min filter />
      <div
        className={classNames(classes.main, classes.mainRaised, classes.center)}
      >
        <div className={classes.container}>
          <h3 className={classes.title}>Lym's Video</h3>
          <div className={classes.videoExpl}>
            Lym can be seen at 1:59 & 2:43 in the above video clip when viewed
            in full screen.
          </div>
          <YouTube videoId="1RWD7yMxlTA" opts={opts} />
          <br />
          <h3 className={classes.title}>
            West Hillhurst Piano & Violin 2024 Spring Recital{" "}
          </h3>
          <div className={classes.videoExpl}>Full version: 29 mins 27 sec</div>
          <YouTube videoId="gt7pxfuwCYk" opts={opts} />
          <div className={classes.videoExpl}>Short version: 4 mins 8 sec</div>
          <YouTube videoId="S_EQx6aTzk4" opts={opts} />
          <br />
          <h3 className={classes.title}>Student Video</h3>
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
