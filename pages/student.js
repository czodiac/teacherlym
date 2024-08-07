import React from "react";
// nodejs divbrary that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function StudentPage(props) {
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
      <Parallax filter image="/img/stage.png" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Lym's Students</h3>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={6}>
                    <img
                      alt="..."
                      src="/img/student/lennon2.JPG"
                      className={navImageClasses}
                      title="Lennon"
                    />
                    <img
                      alt="..."
                      src="/img/student/student.jpg"
                      className={navImageClasses}
                      title="Student"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <img
                      alt="..."
                      src="/img/student/Age 5 Learned 7 months_PNG.webp"
                      className={navImageClasses}
                      title="Age 5 Learned 7 months"
                    />
                    <img
                      alt="..."
                      src="/img/student/Learning Bow hold with bowhold buddies_J.webp"
                      className={navImageClasses}
                      title="Learning Bow hold with bowhold buddies"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <img
                      alt="..."
                      src="/img/student/ian.jpg"
                      className={navImageClasses}
                      title="Ian"
                    />
                    <img
                      alt="..."
                      src="/img/student/isac.jpg"
                      className={navImageClasses}
                      title="Isac"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <img
                      alt="..."
                      src="/img/student/lennon.JPG"
                      className={navImageClasses}
                      title="Lennon"
                    />
                    <img
                      alt="..."
                      src="/img/student/ida.jpg"
                      className={navImageClasses}
                      title="Ida"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <img
                      alt="..."
                      src="/img/student/Preparing for RCM exam_JPG.webp"
                      className={navImageClasses}
                      title="Preparing for RCM exam"
                    />
                    <img
                      alt="..."
                      src="/img/student/Practicing right bow direction_JPG.webp"
                      className={navImageClasses}
                      title="Practicing right bow direction"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <img
                      alt="..."
                      src="/img/student/Playing Bach_Age 9_JPG.webp"
                      className={navImageClasses}
                      title="Playing Bach_Age 9"
                    />
                    <img
                      alt="..."
                      src="/img/student/Bow hold learning _Age 5_JPG.webp"
                      className={navImageClasses}
                      title="Bow hold learning _Age 5"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <img
                      alt="..."
                      src="/img/student/Age 13 Learned 5 months_PNG.webp"
                      className={navImageClasses}
                      title="Age 13 Learned 5 months"
                    />
                    <img
                      alt="..."
                      src="/img/student/Age 10 Playing Suzuki songs_PNG.webp"
                      className={navImageClasses}
                      title="Age 10 Playing Suzuki songs"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <img
                      alt="..."
                      src="/img/student/Age 6 Learned 4 months_PNG.webp"
                      className={navImageClasses}
                      title="Age 6 Learned 4 months"
                    />
                    <img
                      alt="..."
                      src="/img/student/Age 5 Learning Bow Hold_PNG.webp"
                      className={navImageClasses}
                      title="Age 5 Learning Bow Hold"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <img
                      alt="..."
                      src="/img/student/Elsa _Age 5_JPG.webp"
                      className={navImageClasses}
                      title="Elsa Age 5"
                    />
                    <img
                      alt="..."
                      src="/img/student/Maya - Learnt 2 months_JPG.webp"
                      className={navImageClasses}
                      title="Maya - Learnt 2 months"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <img
                      alt="..."
                      src="/img/student/Maya.webp"
                      className={navImageClasses}
                      title="Maya"
                    />
                    <img
                      alt="..."
                      src="/img/student/Maya.webp"
                      className={navImageClasses}
                      title="Maya"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <img
                      alt="..."
                      src="/img/student/Yalda.webp"
                      className={navImageClasses}
                      title="Yalda"
                    />
                    <img
                      alt="..."
                      src="/img/student/Kaia_JPG.webp"
                      className={navImageClasses}
                      title="Kaia"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <img
                      alt="..."
                      src="/img/student/Lennon_JPG.webp"
                      className={navImageClasses}
                      title="Lennon"
                    />
                    <img
                      alt="..."
                      src="/img/student/Jean_JPG.webp"
                      className={navImageClasses}
                      title="Jean"
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <img
                      alt="..."
                      src="/img/student/Irene_JPG.webp"
                      className={navImageClasses}
                      title="Irene"
                    />
                    <img
                      alt="..."
                      src="/img/student/Student.webp"
                      className={navImageClasses}
                      title="Student"
                    />
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
