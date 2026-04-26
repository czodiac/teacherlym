import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import YouTube from "react-youtube";
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

// 반응형 비디오 wrapper 스타일
const videoWrapperStyle = {
  position: "relative",
  paddingBottom: "56.25%", // 16:9 비율
  height: 0,
  overflow: "hidden",
  width: "100%",
  marginBottom: "16px",
};

const iframeStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
};

// 반응형 YouTube 컴포넌트
function ResponsiveYouTube({ videoId }) {
  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div style={videoWrapperStyle}>
      <YouTube videoId={videoId} opts={opts} style={iframeStyle} />
    </div>
  );
}

export default function VideoPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header rightLinks={<HeaderLinks />} fixed {...rest} />
      <Parallax min filter />
      <div
        className={classNames(classes.main, classes.mainRaised, classes.center)}
      >
        <div className={classes.container}>
          <h3 className={classes.title} style={{ padding: "20px 0 0 0" }}>
            Lym's Video
          </h3>
          <div className={classes.videoExpl}>
            Lym can be seen at 1:59 & 2:43 when viewed in full screen.
          </div>
          <ResponsiveYouTube videoId="1RWD7yMxlTA" />
          <div className={classes.videoExpl}>
            14 yr old Lym Playing Ave Maria at 1:22:10
          </div>
          <ResponsiveYouTube videoId="KPOfLKeoJ4w" />
          <div className={classes.videoExpl}>
            Teacher Lym performing/learning the Mendelssohn Violin Concerto at
            age 14.
          </div>
          <ResponsiveYouTube videoId="fCi9W6p1nHI" />

          <h3 className={classes.title}>
            West Hillhurst Piano & Violin 2024 Spring Recital{" "}
          </h3>
          <div className={classes.videoExpl}>Full version: 29 mins 27 sec</div>
          <ResponsiveYouTube videoId="gt7pxfuwCYk" />
          <div className={classes.videoExpl}>Short version: 4 mins 8 sec</div>
          <ResponsiveYouTube videoId="S_EQx6aTzk4" />

          <h3 className={classes.title}>
            Yuki performs at the Calgary Performing Arts Festival{" "}
          </h3>
          <ResponsiveYouTube videoId="rspJoetzzKc" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
