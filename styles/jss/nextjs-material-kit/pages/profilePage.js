import { container, title } from "/styles/jss/nextjs-material-kit.js";

import imagesStyle from "/styles/jss/nextjs-material-kit/imagesStyles.js";

const profilePageStyle = {
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)",
    },
  },
  description: {
    margin: "0 auto 0",
    maxWidth: "1000px",
    textAlign: "center !important",
  },
  name: {
    marginTop: "0px",
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    padding: "0 0 30px 0",
  },
  mainRaised: {
    margin: "-220px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  mainNoParallax: {
    margin: "100px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  subTitle: {
    ...title,
    textAlign: "left",
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center",
  },
  subListItem: {
    padding: "0 0 10px 45px",
  },
  chkIcon: {
    margin: "0 10px 0 0",
    color: "#448946",
    verticalAlign: "bottom",
  },
  chkIconSub: {
    padding: "0 0 0 0px",
    margin: "0 10px 0 0",
    color: "#448946",
    verticalAlign: "bottom",
  },
  subItem: {
    padding: "20px 10px 0px 10px",
    listStyleType: "none",
    textAlign: "left",
  },
  center: {
    textAlign: "center",
  },
  left: {
    textAlign: "left",
  },
  right: {
    textAlign: "right",
  },
  profileimg: {
    borderRadius: "25px",
    border: "1px solid #ddd",
    padding: "5px",
  },
  addBox: {
    background: "#fffaf4",
    border: "1px solid #ddd",
    margin: "15px 0 0 0",
    padding: "10px 10px 0px 10px",
    textAlign: "left",
  },
  redBold: {
    color: "#d24b4b",
    fontWeight: "600",
  },
  marginTop: {
    marginTop: "10px",
  },
  videoExpl: {
    color: "#747474",
    fontSize: "14px",
    marginBottom: "5px",
    fontWeight: "600",
  },
};

export default profilePageStyle;
