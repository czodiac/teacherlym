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

export default function KidsPianoPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const opts = {
    height: "563",
    width: "1000",
    playerVars: {
      autoplay: 0,
    },
  };
  function onShowOriginal() {
    window.open("/img/mainPage_Original.png", "_blank");
  }
  return (
    <div>
      <Header rightLinks={<HeaderLinks />} fixed {...rest} />
      <Parallax filter image="/img/kid.png" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div className={classes.name}>
                  <h3 className={classes.title}>Video Demos</h3>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <div className={classes.subItem}>
              As a dedicated teacher, I've always thought traditional teaching
              methods could be improved. So, I decided to explore alternative
              approaches and find a better way to teach piano to children.
            </div>
            <div className={classes.subItem}>
              During my research, I came across Elga Lusher, a Hungarian
              educator and musician. She was inspired by the teachings of Zoltán
              Kodály, a famous composer and music educator. Lusher built upon
              Kodály's ideas and created a special approach that uses animals to
              make music lessons more engaging for young learners.
            </div>
            <div className={classes.subItem}>
              During our lessons, children will have fun exploring music through
              playful and imaginative animal-based activities. They'll associate
              musical elements like pitch, rhythm, and dynamics with specific
              animals. By imitating animal sounds and movements, they'll gain a
              better understanding of musical concepts. But it doesn't stop
              there! We also focus on solfege study. Children will build a solid
              foundation in recognizing pitch and understanding melodic patterns
              in music.
            </div>
            <div className={classes.subItem}>
              With the animal approach and solfege study, we are here to help
              children learn piano in a fun and engaging way, laying the
              groundwork for a lifelong love of music.
            </div>
            <br />
            <YouTube videoId="XWtzCVvXDJA" opts={opts} />
            <YouTube videoId="23eO7AuKp8Y" opts={opts} />
            <YouTube videoId="xoPuaJJ5Fh4" opts={opts} />
            <YouTube videoId="GpOkzy50eAY" opts={opts} />
            <YouTube videoId="9wSRptXNfRE" opts={opts} />
            <YouTube videoId="b-C8WkI82KE" opts={opts} />
            <YouTube videoId="1saN2MZ23Sw" opts={opts} />
            <YouTube videoId="nwCKX9I1yxE" opts={opts} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
