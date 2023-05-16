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
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div className={classes.name}>
                  <h3 className={classes.title}>Teacher Profile</h3>
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
