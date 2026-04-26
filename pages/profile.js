// nodejs divbrary that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";

import styles from "../styles/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  function onShowOriginal() {
    window.open("/img/mainPage_Original.png", "_blank");
  }

  return (
    <div>
      <Header rightLinks={<HeaderLinks />} fixed {...rest} />
      <div className={classNames(classes.main, classes.mainNoParallax)}>
        <div className={classes.container}>
          <br />

          {/* ── Ellie (Ahhyun) Kim ── */}
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div className={classes.name}>
                  <h3 className={classes.title} style={{ margin: "0" }}>
                    Ellie (Ahhyun) Kim – Piano & Ukulele
                  </h3>
                  <h4 className={classes.titleSub}>
                    RCM Certified | Yamaha Certified
                  </h4>
                </div>
              </div>
              <img
                alt="Ellie (Ahhyun) Kim - West Hillhurst Violin and Piano"
                src="/img/AhhyunKim.jpeg"
                className={classes.teacherPhotoResponsive}
              />
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <div className={classes.subItem}>
              Ellie is a warm and dedicated piano instructor who truly loves
              teaching young children. She holds a{" "}
              <strong>Bachelor of Piano Performance</strong> and is an
              officially <strong>RCM Level 8 Certified Teacher</strong>.
            </div>
            <div className={classes.subItem}>
              Ellie also teaches at <strong>Yamaha Music School</strong>, where
              she applies Yamaha's proven teaching system to help students build
              strong musical foundations, develop excellent technique, and
              enhance their overall musicianship.
            </div>
            <div className={classes.subItem}>
              She has experience teaching students of all ages and levels and is
              known for creating engaging, personalized lessons that support
              each student's unique learning style. Ellie places a strong
              emphasis on both technical development and musical expression,
              helping students grow with confidence and enjoyment.
            </div>
            <div className={classes.subItem}>
              Ellie is especially recognized for her ability to connect with
              young students, creating a warm and supportive environment where
              they feel motivated, supported, and inspired to develop a lifelong
              love of music.
            </div>
            <div className={classes.subItem}>
              In addition to teaching, Ellie actively gives back to the Calgary
              community as a <strong>volunteer pianist</strong>, performing at
              senior care homes through <strong>Alberta Health Services</strong>
              .
            </div>
            <div className={classes.subItem}>
              Ellie holds a{" "}
              <strong>
                <a href="./AhhyunKimPoliceRecord2025.pdf" target="_blank">
                  clear Police Information Check, including a Vulnerable Sector
                  Search
                </a>
              </strong>
              , ensuring a safe and secure learning environment for our
              students.
            </div>
          </div>

          <br />
          <br />

          {/* ── Alex ── */}
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div className={classes.name}>
                  <h3 className={classes.title} style={{ margin: "0" }}>
                    Alex Paisit Tangkitsiri – Piano
                  </h3>
                  <h4 className={classes.titleSub}>
                    RCM Registered Teacher | Yamaha Certified Instructor
                  </h4>
                </div>
              </div>
              <img
                alt="Alex - West Hillhurst Violin and Piano"
                src="./img/Alex.jpg"
                className={classes.teacherPhotoResponsive}
                style={{ maxWidth: "420px" }}
              />
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <div className={classes.subItem}>
              Alex Tangkitsiri is a highly experienced and dedicated piano
              educator with many years of teaching experience working with
              students of all ages, from young beginners to adult learners. He
              is widely respected by colleagues and former students for his
              caring, patient, and genuinely kind teaching approach.
            </div>
            <div className={classes.subItem}>
              Alex is a Registered Teacher with{" "}
              <strong>The Royal Conservatory of Music</strong>.{" "}
              <strong>
                <a
                  href="https://www.rcmusic.com/teachers/a/alex-tangkitsiri"
                  target="_blank"
                >
                  Click here to view his official RCM teacher profile and read
                  more about his teaching philosophy.
                </a>
              </strong>{" "}
              His teaching follows the structured curriculum of the RCM system,
              helping students build strong foundations in technique, theory,
              and musical expression.
            </div>
            <div className={classes.subItem}>
              Alex also completed professional training with{" "}
              <strong>Yamaha Music School</strong> in Toronto and is a{" "}
              <strong>certified Yamaha Junior Music Course instructor</strong>.
              He successfully passed the Yamaha Teacher Candidates Examination
              (TCE), which includes advanced testing in music theory, dictation,
              composition, and piano performance at a minimum{" "}
              <strong>RCM Grade 12 level</strong>. During his time with Yamaha,
              he taught both{" "}
              <strong>group classes for young children (ages 4–6)</strong> and{" "}
              <strong>private piano lessons for students of all levels</strong>.
            </div>
            <div className={classes.subItem}>
              Throughout his career, Alex has participated in numerous music
              seminars and teacher training programs and has taught in several
              music schools across Canada. His teaching experience includes
              preparing students for{" "}
              <strong>
                RCM examinations, recitals, and performance festivals
              </strong>
              , helping them develop both technical excellence and confidence in
              performance.
            </div>
            <div className={classes.subItem}>
              For the absolute peace of mind of our families, Alex has
              successfully completed the{" "}
              <strong>
                <a href="./AlexPolicRecord2026.pdf" target="_blank">
                  Recent Police Information Check with Vulnerable Sector Search
                  (VSC)
                </a>
              </strong>{" "}
              through the Calgary Police Service. This is the most comprehensive
              and stringent background screening required for professionals
              working closely with children.
            </div>
          </div>

          <br />
          <br />

          {/* ── Lym ── */}
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div className={classes.name}>
                  <h3 className={classes.title} style={{ margin: "0" }}>
                    Lym Kim - Piano & Violin
                  </h3>
                  <h4 className={classes.titleSub}>
                    RCM Registered Teacher | Suzuki Certified Teacher
                  </h4>
                </div>
              </div>
              <div className={classes.photoRow}>
                <img
                  alt="Lym - West Hillhurst Violin and Piano"
                  src="./img/Lym.jpg"
                  className={classes.photoRowItem}
                />
                <img
                  alt="Lym 2 - West Hillhurst Violin and Piano"
                  src="./img/LymLee.jpg"
                  className={classes.photoRowItem}
                />
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <div className={classes.subItem}>
              Lym Kim is a skilled violinist and pianist whose teaching method
              uniquely combines the Suzuki and Shinozaki approaches. While the
              Suzuki method emphasizes learning music by ear and listening, the
              Shinozaki method focuses more on music theory and academic study.
              She also incorporates both RCM and Alfred's method materials,
              depending on each student's needs.
            </div>
            <div className={classes.subItem}>
              Known for her kind, caring, and empathetic teaching style, Mrs.
              Lym creates a warm and supportive environment where her students
              feel encouraged to explore their creativity without fear of
              judgment or shame. She adopts a teaching style that avoids
              dictating instructions and instead promotes active participation
              by asking questions such as, "Do you wanna try this?", "What do
              you think about this?", and "How can you make this better?" This
              approach nurtures her students' artistic independence and
              creativity.
            </div>
            <div className={classes.subItem}>
              Her teaching philosophy is inspired by the legendary Juilliard
              violin professor Dorothy DeLay, renowned for mentoring world-class
              musicians through thoughtful questioning rather than direct
              commands.
            </div>
            <div className={classes.subItem}>
              She holds a bachelor's degree in violin performance with a piano
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
              Mr. Barta's mentorship, Mrs. Lym studied Mozart's Violin Concertos
              extensively and in depth.
            </div>
            <div className={classes.subItem}>
              At just age ten, upon her teacher's recommendation, she became the
              youngest member of the Southern Illinois University Orchestra,
              performing among college-level musicians.
            </div>
            <div className={classes.subItem}>
              She also received daily private lessons from a Russian master
              violinist, a former concertmaster of the Novosibirsk Philharmonic
              Orchestra, and a direct student of Zakhar Bron—the legendary
              mentor of Maxim Vengerov and Vadim Repin. This immersive
              mentorship helped her absorb the bowing, phrasing techniques of
              the Russian violin school.
            </div>
            <div className={classes.subItem}>
              In 2009, she was invited to perform at the Seoul Spring Chamber
              Music Festival, a prestigious gathering of top-tier international
              musicians. From 2014 to 2015, she served as a music teacher at
              Busan Foreign School, an international school in South Korea.
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
              Mrs. Lym is a <strong>certified Suzuki teacher</strong>, having
              completed Suzuki pedagogy training at the Royal Conservatory of
              Music in Toronto. She is a proud member of the{" "}
              <strong>Suzuki Association of the Americas</strong> (Member #:
              115618), the American Federation of Musicians (AFM), and a
              certified teacher of the Royal Conservatory of Music (RCM Teacher
              #: 108136), fully qualified to prepare students for RCM
              examinations. She also holds a clean criminal record.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
