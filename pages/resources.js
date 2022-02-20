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

export default function ResourcesPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div>
      <Header rightLinks={<HeaderLinks />} fixed {...rest} />
      <Parallax small filter image="/img/bg8.jpg" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div className={classes.name}>
                  <h3 className={classes.title}>Resources</h3>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <div className={classes.subItem}>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              Music score :&nbsp;
              <a href="http://www.imslp.org" target="_blank">
                imslp.org
              </a>
            </div>
            <div className={classes.subItem}>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              If you want to be an ochestra musician, visit&nbsp;
              <a href="http://www.violinexcerpts.com/" target="_blank">
                ViolinExcerpts.com
              </a>
            </div>
            <div className={classes.subItem}>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              Suzuki books can be purchased from&nbsp;
              <a href="http://www.sharmusic.com" target="_blank">
                sharmusic.com
              </a>
            </div>
            <div className={classes.subItem}>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              Shinozaki violin books can only be purchased from&nbsp;
              <a
                href="http://www.amazon.com/s/ref=nb_sb_ss_i_2_9?url=search-alias%3Daps&amp;field-keywords=shinozaki+violin+method&amp;sprefix=shinozaki+violin+method%2Caps%2C232"
                target="_blank"
                rel="noreferrer noopener"
                class="focus-within"
              >
                amazon.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
