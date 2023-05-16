/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <Link href="kids_piano" passHref={true}>
        <Button className={classes.navLink} color="transparent">
        <img src="/img/bear.png" width="45px"/><p className={classes.LargeLink}>Kids' Piano</p>
        </Button>
      </Link>
      <Link href="home" passHref={true}>
        <Button className={classes.navLink} color="transparent">
          Home
        </Button>
      </Link>
      <Link href="profile" passHref={true}>
        <Button className={classes.navLink} color="transparent">
          Profile
        </Button>
      </Link>
      <Link href="policy" passHref={true}>
        <Button className={classes.navLink} color="transparent">
          Rate/Policy
        </Button>
      </Link>
      <Link href="student" passHref={true}>
        <Button className={classes.navLink} color="transparent">
          Students
        </Button>
      </Link>
      <Link href="videos" passHref={true}>
        <Button className={classes.navLink} color="transparent">
          Videos
        </Button>
      </Link>
      <Link href="contact" passHref={true}>
        <Button className={classes.navLink} color="transparent">
          Contact
        </Button>
      </Link>
    </List>
  );
}
