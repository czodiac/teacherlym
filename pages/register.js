import React from "react";
// nodejs divbrary that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";
import styles from "/styles/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header rightLinks={<HeaderLinks />} fixed {...rest} />
      <div style={{ height: "110px" }}></div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf7mW6uvXGJwdAyY65sTLst5WScwqq07Bp93zHxCXYtqKlW0w/viewform?embedded=true"
        width="100%"
        height="3868"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>

      <Footer />
    </div>
  );
}
