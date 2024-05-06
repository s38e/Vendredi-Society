"use client";
import styles from "./styles/CircleSection_1.module.css";
import { useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import gsap from "gsap";

const CircleSection_1 = () => {
  // ----------- Mouse Cercle ----------- //
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // ----------- Mouse Cercle ----------- //
    if (!isMobile) {
      const circle = circleRef.current;
      const text = textRef.current;
      const circleWidth = circle.offsetWidth;
      const textWidth = text.offsetWidth;
      const circleHeight = circle.offsetHeight;
      const textHeight = text.offsetHeight;

      const onMouseMove = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        gsap.to(circle, {
          duration: "auto",
          x: mouseX - circleWidth / 2,
          y: mouseY - circleHeight / 2,
        });

        gsap.to(text, {
          duration: "auto",
          x: mouseX - textWidth / 2,
          y: mouseY - textHeight / 2,
        });
      };

      window.addEventListener("mousemove", onMouseMove);

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
      };
    }
  });

  return (
    <>
      <div ref={circleRef} className={styles.circle}></div>
      <div ref={textRef} className={styles.textInCircle}>
        Play Real
      </div>
    </>
  );
};

export default CircleSection_1;
