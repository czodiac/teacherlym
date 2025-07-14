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
      <div className={classNames(classes.main, classes.mainNoParallax)}>
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
              She is RCM Certified (Level 8) and has completed advanced
              pedagogical training through Canada Music Pedagogy, specializing
              in music theory, performance technique, and RCM exam coaching.
              This equips her with a deep understanding of the Canadian
              curriculum and exam requirements.
            </div>
            <div className={classes.subItem}>
              Heather holds a Bachelor of Piano Performance from Dankook
              University, a Master’s Degree in Art and Culture Business
              Administration from Hanyang University—one of South Korea’s
              top-ranking institutions, widely respected for its leadership in
              arts and education—and a Professional Lecturer License in Music
              Education from Seoul National University, South Korea’s most
              prestigious university (2018).
            </div>
            <div className={classes.subItem}>
              She currently teaches at Musicworks Canada (Edgemont & Beddington)
              and at Chinook School of Music, one of Calgary’s largest and most
              respected music schools. Heather offers personalized curricula for
              students aged 4 to adult, focusing on foundational technique,
              advanced performance, and music theory. Her warm, focused, and
              detail-oriented teaching style fosters a positive environment that
              balances discipline and creativity, helping students find joy and
              beauty in music.
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
              Heather also performs actively at community events, including
              piano trios, violin-piano duets, and solo recitals.
            </div>
            <div className={classes.subItem}>
              Beyond her professional work, she shares her love of music through
              volunteer performances at the Calgary Public Library, university
              hospitals, homeless shelters, and nursing homes—bringing music’s
              healing power to people at venues across Calgary.
            </div>
            <div className={classes.subItem}>
              Mrs. Heather has no criminal record. (
              <a href="./HeatherPoliceRecord2025Jan.pdf" target="_blank">
                Jan 2025 document
              </a>
              )
            </div>
          </div>
          <br />
          <br />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <img
                alt="West Hillhurst Violin and Piano"
                src="./img/Lym.jpg"
                style={{
                  display: "block",
                  maxWidth: "100%",
                  height: "auto",
                  margin: "0 auto",
                }}
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
              Lym Kim is a skilled violinist and pianist whose teaching method
              uniquely combines the Suzuki and Shinozaki approaches. While the
              Suzuki method emphasizes learning music by ear and listening, the
              Shinozaki method focuses more on music theory and academic study.
              She also incorporates both RCM and Alfred’s method materials,
              depending on each student’s needs.
            </div>
            <div className={classes.subItem}>
              Known for her kind, caring, and empathetic teaching style, Mrs.
              Lym creates a warm and supportive environment where her students
              feel encouraged to explore their creativity without fear of
              judgment or shame. She adopts a teaching style that avoids
              dictating instructions and instead promotes active participation
              by asking questions such as, “Do you wanna try this?”, “What do
              you think about this?”, and “How can you make this better?” This
              approach nurtures her students’ artistic independence and
              creativity.
            </div>
            <div className={classes.subItem}>
              Her teaching philosophy is inspired by the legendary Juilliard
              violin professor Dorothy DeLay, renowned for mentoring world-class
              musicians through thoughtful questioning rather than direct
              commands.
            </div>
            <div className={classes.subItem}>
              She holds a bachelor’s degree in violin performance with a piano
              minor and has pursued advanced studies at the Royal Conservatory
              of Music in Toronto and California State University, San
              Bernardino. She was a pupil of Michael Barta, 2nd prize winner at
              the 1973 Joseph Szigeti International Violin Competition, finalist
              at the 1974 Tchaikovsky International Violin Competition, and a
              student of the legendary violinist{" "}
              <a
                href="https://en.wikipedia.org/wiki/Arthur_Grumiaux"
                target="_blank"
              >
                Arthur Grumiaux
              </a>
              , whose Mozart concerto recordings are considered iconic. Under
              Mr. Barta’s mentorship, Mrs. Lym studied Mozart’s Violin Concertos
              extensively and in depth.
            </div>
            <div className={classes.subItem}>
              At just age ten, upon her teacher’s recommendation, she became the
              youngest member of the Southern Illinois University Orchestra,
              performing among college-level musicians.
            </div>
            <div className={classes.subItem}>
              She also received daily private lessons from a Russian master
              violinist, a former concertmaster of the Novosibirsk Philharmonic
              Orchestra, and a direct student of Zakhar Bron—the legendary
              mentor of Maxim Vengerov and Vadim Repin. This immersive
              mentorship helped her absorb the bowing , phrasing techniques of
              the Russian violin school.
            </div>
            <div className={classes.subItem}>
              In 2009, she was invited to perform at the Seoul Spring Chamber
              Music Festival, a prestigious gathering of top-tier international
              musicians. From 2014 to 2015, she served as a music teacher at
              Busan Foreign School an international school in South Korea.
            </div>
            <div className={classes.subItem}>
              Throughout her career, she served as 1st violinist with the York
              Symphony Orchestra and the Mississauga Symphony Orchestra in
              Ontario, as well as various orchestras in S.Korea. She has
              performed extensively in piano trios and other chamber ensembles
              for weddings and professional events across Toronto and
              Mississauga, collaborating with local professional musicians.
            </div>
            <div className={classes.subItem}>
              Mrs. Lym is a certified Suzuki teacher, having completed Suzuki
              pedagogy training at the Royal Conservatory of Music in Toronto.
              She is a proud member of the Suzuki Association of the Americas
              (Member #: 115618), the American Federation of Musicians (AFM),
              and a certified teacher of the Royal Conservatory of Music (RCM
              Teacher #: 108136), fully qualified to prepare students for RCM
              examinations. She also holds a clean criminal record (verified
              2015).
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
