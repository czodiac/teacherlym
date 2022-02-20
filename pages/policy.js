import React from "react";
// nodejs divbrary that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// core components
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "styles/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function PolicyPage(props) {
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
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div className={classes.name}>
                  <h3 className={classes.title}>Policy</h3>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <h4 className={classes.subTitle}>Tuition Fee (in CAD)</h4>
            <div className={classes.left}>
              $39 for 30 min. $55 for 45 min. $65 for an hour. Add $15 for a
              lesson at your place. Please{" "}
              <a href="mailto:junglelym0214@gmail.com">email</a> for group
              lesson rate. ​
            </div>
            <h4 className={classes.subTitle}>Cancellation</h4>
            <List disablePadding>
              <ListItem>
                <KeyboardArrowRightIcon className={classes.chkIcon} />
                At least 24 hours notice is required. Otherwise no make up
                lesson/refund or credit can be issued.
              </ListItem>
              <ListItem>
                <KeyboardArrowRightIcon className={classes.chkIcon} />
                Credit from a cancellation is non-refundable and may only be
                used towards make-up lesson.
              </ListItem>
            </List>
            <h4 className={classes.subTitle}>Make-up Lesson/Rescheduling</h4>
            <List disablePadding>
              <ListItem>
                <KeyboardArrowRightIcon className={classes.chkIcon} />
                Maximum of 3 make-up lessons per year will be granted with at
                least 24 hours notice.
              </ListItem>
              <ListItem>
                <KeyboardArrowRightIcon className={classes.chkIcon} />
                Make-up lessons not used after 3 months will be considered
                forfeited.​
              </ListItem>
              <ListItem>
                <KeyboardArrowRightIcon className={classes.chkIcon} />A
                scheduled make-up lesson can not be rescheduled for any reason.
              </ListItem>
              <ListItem>
                <KeyboardArrowRightIcon className={classes.chkIcon} />
                With 24 hour notice, a student can reschedule a lesson in the
                same month only. Missed Lessons cannot be applied as credits
                towards following month. (Please understand that enrolling for a
                lesson is a purchase of teacher's time, prepared in advance to
                be free from interruptions and distractions. Since the time
                passes whether a student uses it or not, a lesson missed is time
                lost. This is why the payment for a cancelled lesson can not be
                carried over to the next payment.)
              </ListItem>
            </List>
            <h4 className={classes.subTitle}>Termination</h4>
            <List disablePadding>
              <ListItem>
                <KeyboardArrowRightIcon className={classes.chkIcon} />2 weeks
                notice is required to withdraw.
              </ListItem>
              <ListItem>
                <KeyboardArrowRightIcon className={classes.chkIcon} />
                Credits from missed lessons are non-refundable upon termination.
                However, those may be used towards make-up lessons.
              </ListItem>
            </List>
            <h4 className={classes.subTitle}>Suspension of Student</h4>
            <div className={classes.left}>
              Mrs. Lym reserves the right to suspend a student for non-payment
              of tuition fee or inappropriate conduct.
            </div>
            ​<h4 className={classes.subTitle}>Payment</h4>
            <div className={classes.left}>
              One month tuition fee(4 or 5 weeks) is due on the first lesson day
              for each month. ​
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
