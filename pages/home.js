import React from "react";
// nodejs divbrary that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";
import Link from "next/link";
import styles from "/styles/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header rightLinks={<HeaderLinks />} fixed {...rest} />
      <Parallax filter image="/img/kid_group.png" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div className={classes.name}>
                  <h3 className={classes.title}>
                    Welcome to West Hillhurst Piano and Violin
                  </h3>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <div className={classes.subItem}>
              <Link href="kids_piano" passHref={true}>
                Videos on how I teach children
              </Link>
            </div>
            <div className={classes.subItem}>
              West Hillhurst Piano and Violin is a music education facility
              situated in West Hillhurst, Calgary AB. We specialize in providing
              personalized, one-on-one music lessons to individuals of various
              age groups and proficiency levels within the Calgary area. Our
              primary objective is to foster the development of students'
              musical abilities and comprehension through engaging and
              captivating instructional methods.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
