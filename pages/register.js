import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import styles from "/styles/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles((theme) => ({
  ...styles,
  topArea: {
    background: "#f8f4f1",
    paddingBottom: "16px",
  },
  headerSpacer: {
    height: "120px",
    "@media (max-width: 1279px)": {
      height: "85px", // 햄버거 메뉴(모바일/태블릿)
    },
  },
  banner: {
    maxWidth: "640px",
    margin: "0 auto 0px",
    padding: "12px 20px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #fadfb8 0%, #f9c58a 100%)",
    border: "1px solid #e6b07a",
    color: "#6b2f10",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(107, 47, 16, 0.15)",
    "@media (max-width: 600px)": {
      margin: "0 12px 12px",
      padding: "8px 12px",
    },
  },
  bannerText: {
    fontSize: "0.9rem",
    fontWeight: 400,
    marginTop: "5px",
    lineHeight: 1.45,
    "@media (max-width: 600px)": {
      fontSize: "0.78rem",
      lineHeight: 1.35,
    },
  },
  availabilityArea: {
    background: "#f8f4f1", // 폼 뒤 배경색
  },
  availability: {
    maxWidth: "640px",
    margin: "0 auto",
    padding: "0 16px 8px",
    textAlign: "center",
    color: "#6b2f10",
  },

  availabilityText: {
    fontSize: "0.95rem",
    lineHeight: 1.5,
    margin: "10px 0 0",
  },
  availabilityLink: {
    color: "#6b2f10",
    fontWeight: 700,
    textDecoration: "underline",
  },
}));

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const widgetRef = useRef(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    const iframe = document.querySelector("iframe");
    const onIframeLoad = () => window.scrollTo(0, 0);
    if (iframe) iframe.addEventListener("load", onIframeLoad);

    // mymusicstaff 위젯: 한 번만 삽입
    if (!loadedRef.current && widgetRef.current) {
      loadedRef.current = true;
      const script = document.createElement("script");
      script.src =
        "https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9MOVBKTSIsIldlYnNpdGVJRCI6Indic190dEtKTiIsIldlYnNpdGVCbG9ja0lEIjoid2JiX3pIUHdySnAifQ==";
      script.async = true;
      widgetRef.current.appendChild(script);
    }

    return () => {
      if (iframe) iframe.removeEventListener("load", onIframeLoad);
    };
  }, []);

  return (
    <div>
      <Header rightLinks={<HeaderLinks />} fixed {...rest} />

      <div className={classes.topArea}>
        <div className={classes.headerSpacer}></div>

        {/* Banner */}
        <div className={classes.banner}>
          <div className={classes.registerTitle}>
            No long-term commitment required.
          </div>
          <div className={classes.bannerText}>
            Registering for the school year does not require a full-year
            commitment. You may discontinue lessons at any time with 30 days’
            notice.
          </div>
        </div>
      </div>

      {/* Availability */}
      <div className={classes.availabilityArea}>
        <div className={classes.availability}>
          <h3 className={classes.registerTitle}>Check Current Availability</h3>
          <p className={classes.availabilityText}>
            <b>For a trial lesson</b>, select the 30-Min Trial Lesson category,
            choose a time slot, sign up, and make your payment. Trial lesson
            payments are non-refundable.
          </p>
          <p className={classes.availabilityText}>
            <b>For regular enrollment</b>, select a weekly lesson slot, then
            view available times using the Calendar. Complete the Google
            Registration Form below. Don't click Next button below Calendar to
            sign up.
          </p>
          <p className={classes.availabilityText}>
            Need 45 or 60 minute lesson, or any assistance?{" "}
            <a href="/contact" className={classes.availabilityLink}>
              Contact Us
            </a>
            <br></br>
            Don't see a time that works for you?{" "}
            <a
              href="https://forms.gle/x8yNLUJGQctQHe4j6"
              target="_blank"
              className={classes.availabilityLink}
            >
              Join the Waitlist
            </a>
          </p>
        </div>
        <div ref={widgetRef}></div>
      </div>

      <div
        className={classes.availabilityArea}
        style={{
          marginTop: "10px",
        }}
      >
        <h3 className={classes.registerTitle}>Google Registration Form</h3>
      </div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe9GQghZKz7CVI7kWCC0G9k1BkME6dUsVxzAWymXzQfY2fxhw/viewform"
        width="100%"
        height="3868"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        onLoad={() => window.scrollTo(0, 0)}
      >
        Loading…
      </iframe>
      <Footer />
    </div>
  );
}
