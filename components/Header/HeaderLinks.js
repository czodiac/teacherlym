/*eslint-disable*/
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Button from "/components/CustomButtons/Button.js";
import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const router = useRouter();

  // Function to determine if the link is active
  const isActive = (href) => {
    return router.pathname === `/${href}` || router.asPath === `/${href}`;
  };

  return (
    <div>
      <div className={classes.topBanner}>
        <Link href="/register" className={classes.whiteLink} passHref>
          <a className={classes.whiteLink}>
            Click here to register for the 2025-2026 school year!
          </a>
        </Link>
      </div>
      <List className={classes.list}>
        <Link href="/home" passHref>
          <Button
            className={`${classes.navLink} ${
              isActive("home") && classes.navLinkActive
            }`}
            color="transparent"
          >
            Home
          </Button>
        </Link>
        <Link href="/register" passHref>
          <Button
            className={`${classes.navLink} ${
              isActive("register") && classes.navLinkActive
            }`}
            color="transparent"
          >
            Register
          </Button>
        </Link>
        <Link href="/kids_piano" passHref>
          <Button
            className={`${classes.navLink} ${
              isActive("kids_piano") && classes.navLinkActive
            }`}
            color="transparent"
          >
            Kids' Piano
          </Button>
        </Link>
        <Link href="/profile" passHref>
          <Button
            className={`${classes.navLink} ${
              isActive("profile") && classes.navLinkActive
            }`}
            color="transparent"
          >
            Teachers
          </Button>
        </Link>
        <Link href="/policy" passHref>
          <Button
            className={`${classes.navLink} ${
              isActive("policy") && classes.navLinkActive
            }`}
            color="transparent"
          >
            Rate/Policy
          </Button>
        </Link>
        <Link href="/student" passHref>
          <Button
            className={`${classes.navLink} ${
              isActive("student") && classes.navLinkActive
            }`}
            color="transparent"
          >
            Students
          </Button>
        </Link>
        <Link href="/videos" passHref>
          <Button
            className={`${classes.navLink} ${
              isActive("videos") && classes.navLinkActive
            }`}
            color="transparent"
          >
            Videos
          </Button>
        </Link>
        <Link href="/contact" passHref>
          <Button
            className={`${classes.navLink} ${
              isActive("contact") && classes.navLinkActive
            }`}
            color="transparent"
          >
            Contact Us
          </Button>
        </Link>
      </List>
    </div>
  );
}
