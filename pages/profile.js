import React from "react";
// nodejs divbrary that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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

export default function ProfilePage(props) {
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
      <Parallax filter image="/img/bg8.jpg" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <img
                alt="West Hillhurst Violin and Piano"
                src="./img/Heather.jpeg"
                height="500px"
                style={{ display: "block", margin: "0 auto" }}
              />
              <div className={classes.profile}>
                <div className={classes.name}>
                  <h3 className={classes.title}>Heather Hyunsuk Lee</h3>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <div className={classes.subItem}>
              Heather Hyunsuk Lee is a passionate piano instructor with over 15
              years of teaching and performance experience in both South Korea
              and Canada.
            </div>
            <div className={classes.subItem}>
              Before moving to Canada, Heather worked at Samsung Display, a
              global technology leader known for its selective hiring and
              high-performance culture. There, she developed strong
              organizational and leadership skills through managing educational
              programs and supporting employees with counseling—qualities she
              brings into her nurturing and structured teaching approach.
            </div>
            <div className={classes.subItem}>
              Her musical foundation is rooted in South Korea’s renowned
              classical training system, which is internationally respected for
              its high standards, rigorous competition, and consistent global
              success. Students in this system undergo years of disciplined
              technical development, frequent performance evaluations, and
              international-level examination standards—foundations that have
              shaped Heather’s structured and high-standard approach to
              teaching.
            </div>
            <div className={classes.subItem}>
              Beyond her professional work, she shares her love of music through
              volunteer performances at the Calgary Public Library, university
              hospitals, homeless shelters, and nursing homes—bringing music’s
              healing power to people at venues across Calgary.
            </div>
            <div className={classes.subItem}>Pianist Mrs. Heather: ​​</div>
            <div className={classes.subItem}>
              <KeyboardArrowRightIcon className={classes.chkIcon} /> is RCM
              Certified (Level 8) and has completed advanced pedagogical
              training through Canada Music Pedagogy, specializing in music
              theory, performance technique, and RCM exam coaching. This equips
              her with a deep understanding of the Canadian curriculum and exam
              requirements.
            </div>
            <div className={classes.subItem}>
              <KeyboardArrowRightIcon className={classes.chkIcon} /> holds a
              Bachelor of Piano Performance from Dankook University, a Master’s
              Degree in Art and Culture Business Administration from Hanyang
              University—one of South Korea’s top-ranking institutions, widely
              respected for its leadership in arts and education—and a
              Professional Lecturer License in Music Education from Seoul
              National University, South Korea’s most prestigious university
              (2018).
            </div>
            <div className={classes.subItem}>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              currently teaches at Musicworks Canada (Edgemont & Beddington) and
              at Chinook School of Music, one of Calgary’s largest and most
              respected music schools. Heather offers personalized curricula for
              students aged 4 to adult, focusing on foundational technique,
              advanced performance, and music theory. Her warm, focused, and
              detail-oriented teaching style fosters a positive environment that
              balances discipline and creativity, helping students find joy and
              beauty in music.
            </div>
            <div className={classes.subItem}>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              performs actively at community events, including piano trios,
              violin-piano duets, and solo recitals.
            </div>
            <div className={classes.subItem}>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              has no criminal record (
              <a href="./HeatherPoliceRecord2025Jan.pdf" target="_blank">
                Jan 2025 document
              </a>
              )
            </div>
          </div>
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <img
                alt="West Hillhurst Violin and Piano"
                src="./img/LymLee.jpg"
                height="300px"
                style={{ display: "block", margin: "0 auto" }}
              />
              <div className={classes.profile}>
                <div className={classes.name}>
                  <h3 className={classes.title}>Lym Kim</h3>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <div className={classes.subItem}>
              Lym's teaching method combines&nbsp;
              <a
                href="https://en.wikipedia.org/wiki/Suzuki_method"
                target="_blank"
              >
                Suzuki
              </a>
              &nbsp;and Shinozaki method. Suzuki emphasizes learning music
              through ears whereas Shinozaki emphasizes more on theories and
              academic approaches.
            </div>
            <div className={classes.subItem}>
              Violinist & Pianist Mrs. Lym: ​​
            </div>
            <div className={classes.subItem}>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              is a pupil of Michael Barta(Winner of&nbsp;
              <a
                href="https://en.wikipedia.org/wiki/International_Tchaikovsky_Competition"
                target="_blank"
              >
                Tchaikovsky International Competition
              </a>
              , Pupil of Legendary Violinist{" "}
              <a
                href="https://en.wikipedia.org/wiki/Arthur_Grumiaux"
                target="_blank"
              >
                Arthur Grumiaux
              </a>
              )
            </div>
            <div className={classes.subItem}>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              was 1st violinist at York symphony orchestra, Mississauga symphony
              orchestra in Ontario and symphonies in Korea
            </div>
            <div className={classes.subItem}>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              is a certified Suzuki teacher trained at Royal Conservatory of
              Music.
            </div>
            <div className={classes.subItem}>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              studied Suzuki pedagogy at Royal Conservatory of Music in Toronto
            </div>
            <div className={classes.subItem}>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              is a member of{" "}
              <a href="https://suzukiassociation.org/" target="_blank">
                Suzuki Association of the Americas
              </a>
              (Member #: 115618) and AFM (American Federation of Musicians)
            </div>
            <div className={classes.subItem}>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              is a certified member of &nbsp;
              <a href="http://www.rcmusic.ca/" target="_blank">
                Royal Conservatory of Music
              </a>
              (RCM Teacher #: 108136) so she can help her student prepare for
              RCM Exams
            </div>
            <div className={classes.subItem}>
              <KeyboardArrowRightIcon className={classes.chkIcon} />
              has no criminal record (
              <a href="./img/criminal_record.jpg" target="_blank">
                Sept 2015 document
              </a>
              )
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
