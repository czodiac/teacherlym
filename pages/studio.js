import React from "react";
// nodejs divbrary that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "styles/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function StudioPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header rightLinks={<HeaderLinks />} fixed {...rest} />
      <Parallax small filter image="/img/bg8.jpg" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
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
            <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                    <img
                      alt="..."
                      src="/img/studio/room.webp"
                      className={navImageClasses}
                      title="Studio"
                    />
                    <img
                      alt="..."
                      src="/img/studio/piano.webp"
                      className={navImageClasses}
                      title="Piano"
                    />
                    <img
                      alt="..."
                      src="/img/studio/room2.webp"
                      className={navImageClasses}
                      title="Studio"
                    />
                  </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Violin for rent</h3>
                  </div>
                  <div className={classes.name}>
                    One 1/2 size violin can be rented for $15/month. Fine tuners(significantly saves teacher and student's time to adjust string tension), new strings, 2 bows and a case are included. 
                    <br></br><br></br>
                  </div>
                </div>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                    <img
                      alt="..."
                      src="/img/studio/for-rent.jpg"
                      className={navImageClasses}
                      title="1/2 size violin for rent"
                    />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
