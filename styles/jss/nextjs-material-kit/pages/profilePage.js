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
    display: "block",
    position: "relative",
    margin: "20px 0 0 0",
    textDecoration: "none",
  },
  titleSub: {
    ...title,
    display: "block",
    position: "relative",
    margin: "0 0 10px 0",
    fontSize: "90%",
    textDecoration: "none",
  },
  subTitle: {
    ...title,
    margin: "10px 0 0 0",
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
  // Single teacher photo
  teacherPhoto: {
    display: "block",
    margin: "0 auto",
    borderRadius: "16px",
    boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18), 0 2px 12px 0 rgba(0,0,0,0.10)",
  },
  // Responsive single teacher photo
  teacherPhotoResponsive: {
    display: "block",
    margin: "0 auto",
    width: "100%",
    maxWidth: "100%",
    height: "auto",
    borderRadius: "16px",
    boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18), 0 2px 12px 0 rgba(0,0,0,0.10)",
  },
  // Row container for side-by-side photos
  photoRow: {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    justifyContent: "center",
    alignItems: "stretch", // flex-start → stretch 로 변경
    width: "100%",
    "@media (max-width: 600px)": {
      flexDirection: "column", // 작은 화면에서 세로로
      alignItems: "center",
    },
  },
  // Each photo inside a row
  photoRowItem: {
    flex: "1 1 0",
    width: "calc(50% + 100px)", // 50px 추가
    maxWidth: "calc(50% + 100px)", // 50px 추가
    height: "400px", // 고정 높이 추가
    objectFit: "cover", // 비율 유지하며 잘라서 채움
    borderRadius: "16px",
    boxShadow: "0 8px 32px 0 rgba(0,0,0,0.18), 0 2px 12px 0 rgba(0,0,0,0.10)",
    display: "block",
    "@media (max-width: 600px)": {
      width: "100%", // 작은 화면에서 전체 너비
      maxWidth: "100%",
      height: "300px", // 모바일 높이
    },
  },
};

export default profilePageStyle;
