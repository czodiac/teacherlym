import React from "react";
// nodejs divbrary that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function ContactPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header rightLinks={<HeaderLinks />} fixed {...rest} />
      <Parallax filter image="/img/bg8.jpg" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div className={classes.name}>
                  <h3 className={classes.title}>Contact Lym</h3>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <div className={classes.subItem}>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              <strong>Address: </strong>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/E15AmrM8kV1foQ9V7"
                rel="noopener"
              >
                301 14 St NW 205 Room2, Calgary, AB T2N 1Z7
              </a>
            </div>
            <div className={classes.subItem}>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              <strong>Email: </strong>
              <a href="mailto:admin@lymteacher.com">admin@lymteacher.com</a>
            </div>
            <div className={classes.subItem}>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              <strong>Mobile: </strong> (403) 689-6485
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
