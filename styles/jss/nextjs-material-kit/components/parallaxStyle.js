const parallaxStyle = (theme) => ({
  parallax: {
    height: "90vh",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center top",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
  },
  filter: {
    "&:before": {
      background: "rgba(229, 229, 229, 0.3)",
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
    },
  },
  large: {
    height: "800px",
  },
  medium: {
    height: "600px",
  },
  small: {
    height: "400px",
  },
  min: {
    height: "320px",
  },
  parallaxResponsive: {
    [theme.breakpoints.down("md")]: {
      minHeight: "660px",
    },
  },
});

export default parallaxStyle;
