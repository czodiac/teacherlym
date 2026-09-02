import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import styles from "/styles/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function ExistingStudent(props) {
  const classes = useStyles();
  const { ...rest } = props;

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9MOVBKTSIsIldlYnNpdGVJRCI6Indic190dEtKTiIsIldlYnNpdGVCbG9ja0lEIjoid2JiX3ozdDdySmgifQ==";
    script.async = true;

    const container = document.getElementById("widget-container");

    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://app.mymusicstaff.com/Widget/v4/Widget.ashx?settings=eyJTY2hvb2xJRCI6InNjaF9MOVBKTSIsIldlYnNpdGVJRCI6Indic190dEtKTiIsIldlYnNpdGVCbG9ja0lEIjoid2JiX3pIUHNtSnYifQ==";
    script.async = true;

    const container = document.getElementById("signup-widget-container");

    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <div>
      <Header rightLinks={<HeaderLinks />} fixed {...rest} />
      <div style={{ height: "110px" }}></div>

      <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 20px" }}>
        <h3 className={classes.title}>Current Student Login</h3>
        <div
          id="widget-container"
          style={{
            margin: "10px 0 0 0",
            border: "1px solid #ddd",
          }}
        ></div>

        <div style={{ marginTop: "30px" }}>
          <h3 className={classes.subTitle}>New Here?</h3>
          <div>
            Please review and complete the policy agreement form below before
            signing up. Then complete the sign-up form.
          </div>
          <div style={{ margin: "10px 0 0 0" }}>
            <iframe
              src="https://forms.gle/rGh5wAihmjJbhrkW6"
              width="100%"
              height="400"
              style={{ border: "1px solid #ddd", borderRadius: "6px" }}
              title="Policy Agreement Form"
            >
              Loading…
            </iframe>
          </div>
          <div
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            Sign up Form
          </div>
          <div
            id="signup-widget-container"
            style={{
              margin: "10px 0 0 0",
            }}
          ></div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
