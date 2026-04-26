import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "/components/Header/Header.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Link from "next/link";
import styles from "/styles/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

const images = [
  "/img/home/1.jpg",
  "/img/home/2.jpg",
  "/img/home/3.jpg",
  "/img/home/4.jpg",
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "600px",
        overflow: "hidden",
      }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === current ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            filter: "brightness(0.55)",
          }}
        />
      ))}

      {/* 좌 화살표 */}
      <button
        onClick={prev}
        style={{
          position: "absolute",
          left: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.25)",
          border: "none",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          fontSize: "1.5rem",
          color: "#fff",
          cursor: "pointer",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(4px)",
        }}
      >
        ‹
      </button>

      {/* 우 화살표 */}
      <button
        onClick={next}
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.25)",
          border: "none",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          fontSize: "1.5rem",
          color: "#fff",
          cursor: "pointer",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(4px)",
        }}
      >
        ›
      </button>

      {/* 하단 점 인디케이터 */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          zIndex: 10,
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? "24px" : "10px",
              height: "10px",
              borderRadius: "5px",
              background: i === current ? "#fff" : "rgba(255,255,255,0.5)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header rightLinks={<HeaderLinks />} fixed {...rest} />
      <HeroSlider />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div className={classes.name}>
                  <h3 className={classes.title} style={{ color: "#6B3F2A" }}>
                    West Hillhurst Piano and Violin
                  </h3>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      color: "#aa7c66",
                    }}
                  >
                    Proudly serving our communities since 2016
                  </p>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <div
              className={classes.subItem}
              style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
            >
              A safe and warm space where mistakes are welcome — and real
              learning begins.
            </div>
            <div className={classes.subItem}>
              Every student is different. We provide a calm and non-intimidating
              learning environment where attention is given to each student's
              personality and pace — from curious children to lifelong adult
              learners.
            </div>
            <div className={classes.subItem}>
              If you are looking for a place where you or your child feels safe,
              respected, and encouraged to grow, we would be happy to work
              together.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
