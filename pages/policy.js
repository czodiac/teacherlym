import React from "react";
import Link from "next/link";
// nodejs divbrary that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
// core components
import { List, ListItem } from "@material-ui/core";
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/profilePage.js";

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
      <Parallax min filter />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div className={classes.name}>
                  <h3 className={classes.title}>Rate / Policy</h3>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <h4 className={classes.subTitle}>Tuition Fee (in CAD)</h4>
            <div className={classes.left}>
              Rates are based on the number of weeks in each month.
              <ListItem>
                <KeyboardArrowRightIcon className={classes.chkIcon} />
                30 minute session: $40 per session
              </ListItem>
              <div className={classes.subListItem}>
                <KeyboardArrowRightIcon className={classes.chkIconSub} />
                $160 per month (for 4 weeks)
              </div>
              <div className={classes.subListItem}>
                <KeyboardArrowRightIcon className={classes.chkIconSub} />
                $200 per month (for 5 weeks)
              </div>
              <ListItem>
                <KeyboardArrowRightIcon className={classes.chkIcon} />
                40 minute session: $55 per session
              </ListItem>
              <div className={classes.subListItem}>
                <KeyboardArrowRightIcon className={classes.chkIconSub} />
                $220 per month (for 4 weeks)
              </div>
              <div className={classes.subListItem}>
                <KeyboardArrowRightIcon className={classes.chkIconSub} />
                $275 per month (for 5 weeks)
              </div>
              <ListItem>
                <KeyboardArrowRightIcon className={classes.chkIcon} />1 hour
                session: $70 per session
              </ListItem>
              <div className={classes.subListItem}>
                <KeyboardArrowRightIcon className={classes.chkIconSub} />
                $280 per month (for 4 weeks)
              </div>
              <div className={classes.subListItem}>
                <KeyboardArrowRightIcon className={classes.chkIconSub} />
                $350 per month (for 5 weeks)
              </div>
              <div className={classes.marginTop}>
                * For July and August, no monthly payment is required. You can
                pay per session.
              </div>
              <div className={classes.marginTop}>
                * New students starting lessons part way through a month will
                have their 1st month's fee prorated based on the number of
                lessons remaining in the month.
              </div>
              <div className={classes.marginTop}>
                <span className={classes.redBold}>* Important:</span> We do not
                deduct rates for missed classes from monthly payments, even with
                advance notice. Missed class time also cannot roll over to the
                next month. Monthly commitments ensure space is reserved and
                spots are paid for.
              </div>
            </div>
            ​<h4 className={classes.subTitle}>Lesson Fee Policy</h4>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              Payment for lessons is due on the 1st of each month. We accept
              payment via e-transfer or cash. ​
            </ListItem>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              Invoices will be sent during the last week of each month.
            </ListItem>
            ​<h4 className={classes.subTitle}>E-transfer Instructions</h4>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              Address: junglelym0214@gmail.com
            </ListItem>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              Recipient: LYM KIM
            </ListItem>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              No password is needed as it is set up for auto-deposit.
            </ListItem>
            ​<h4 className={classes.subTitle}>Late Payment Policy</h4>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              If payment is not received by the 1st of the month, a reminder
              will be sent.
            </ListItem>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              Lessons will be paused if payment remains overdue for more than 20
              days.
            </ListItem>
            <h4 className={classes.subTitle}>Student Absence Policy</h4>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              No refunds, credits, rescheduling, or make-up lessons are
              available for student absences. If a student misses a lesson, they
              forfeit the lesson.
            </ListItem>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              This includes absences due to travel, conflicts (such as sports
              games or school activities), illness, weather conditions, natural
              disasters, traffic delays/accidents, or any other reasons.
            </ListItem>
            <h4 className={classes.subTitle}>Why No Make-Up Lessons?</h4>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              Reserved Time Slots: Each student’s lesson time is reserved
              exclusively for them. A make-up lesson policy would disrupt the
              schedule and fairness for other students.
            </ListItem>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              Full Schedule: Given the full schedule, accommodating make-up
              lessons is very difficult.
            </ListItem>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              Most music lesson providers choose not to offer make-up lessons as
              a standard policy. This ensures consistent scheduling and allows
              teachers to maintain a reliable lesson structure.
            </ListItem>
            <h4 className={classes.subTitle}>Lateness Policy</h4>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} /> Time lost
              due to a student's lateness cannot be made up, as the teacher will
              have other students scheduled after your lesson.
            </ListItem>
            <h4 className={classes.subTitle}>Teacher Absences</h4>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              Any lessons canceled by the instructor will be made up at a
              mutually agreeable time.
            </ListItem>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              Teachers may schedule a substitute teacher from time to time.
            </ListItem>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              If a student cancels or does not attend a scheduled make-up
              lesson, the make-up lesson is forfeited.
            </ListItem>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              In case of teacher illness, particularly if contagious, the
              teacher may schedule online lessons as an alternative
            </ListItem>
            <h4 className={classes.subTitle}>Lesson Withdrawals</h4>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              If you wish to discontinue lessons, a one-month written notice via
              email is required.
            </ListItem>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              No refunds or credits will be given for unused lessons
            </ListItem>
            <h4 className={classes.subTitle}>Safety</h4>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              Students must be escorted by an adult to and from the building;
              children cannot be left unattended.
            </ListItem>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              Parents/Guardians may sign a waiver allowing students 12 years and
              older to enter and exit the premises unescorted.
            </ListItem>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              West Hillhurst Piano and Violin is a nut-free environment.
            </ListItem>
            <h4 className={classes.subTitle}>Government Mandated Closures</h4>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              In the event of a government-mandated closure, all in-person
              lessons will continue online. Refunds and make-up lessons will not
              be available for students who refuse scheduled online lessons due
              to closure. Students may withdraw with one month’s written notice
              via email.
            </ListItem>
            <h4 className={classes.subTitle}>Liability</h4>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              West Hillhurst Piano and Violin, along with the building owners,
              managers, their directors, officers, employees, agents,
              volunteers, contractors, and representatives, are not liable for
              damages, injuries, illnesses, or claims related to participation
              in music lessons, classes, performances, or entering and leaving
              the premises or facilities.
            </ListItem>
            <h4 className={classes.subTitle}>Acts of God</h4>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              West Hillhurst Piano and Violin shall not be liable for failure to
              deliver services due to circumstances beyond its control,
              including Acts of God (such as flood, storm, pandemic, or other
              natural disasters), acts or regulations of public authorities, and
              political or social upheavals.
            </ListItem>
            <h4 className={classes.subTitle}>Suspension of Student</h4>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              Mrs. Lym reserves the right to suspend a student for non-payment
              of tuition fee or inappropriate conduct.
            </ListItem>
            <h4 className={classes.subTitle}>Policy Changes</h4>
            <ListItem>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              West Hillhurst Piano and Violin policies are subject to change
              during the school year. Notice of changes will be provided to
              students through emails.
            </ListItem>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
