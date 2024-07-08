import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import styles from "/styles/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {
    const iframe = document.querySelector("iframe");

    const onIframeLoad = () => {
      window.scrollTo(0, 0);
    };

    if (iframe) {
      iframe.addEventListener("load", onIframeLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener("load", onIframeLoad);
      }
    };
  }, []);

  return (
    <div>
      <Header rightLinks={<HeaderLinks />} fixed {...rest} />
      <div style={{ height: "110px" }}></div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf7mW6uvXGJwdAyY65sTLst5WScwqq07Bp93zHxCXYtqKlW0w/viewform?embedded=true"
        width="100%"
        height="3868"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        onLoad={() => window.scrollTo(0, 0)} // Ensures scroll to top on iframe load
      >
        Loading…
      </iframe>
      <Footer />
    </div>
  );
}
