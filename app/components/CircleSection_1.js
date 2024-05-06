import styles from "./styles/CircleSection_1.module.css";
import stylesPage from "@/app/page.module.css";
import { useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import gsap from "gsap";

const CircleSection_1 = () => {
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!isMobile) {
      const circle = circleRef.current;
      const text = textRef.current;

      const onMouseMove = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const parentBounds = circle
          .closest(`.${stylesPage.section_1} .${stylesPage.vid}`)
          .getBoundingClientRect();
        const circleWidth = circle.offsetWidth;
        const circleHeight = circle.offsetHeight;
        const textWidth = text.offsetWidth;
        const textHeight = text.offsetHeight;

        if (
          mouseX >= parentBounds.left &&
          mouseX <= parentBounds.right &&
          mouseY >= parentBounds.top &&
          mouseY <= parentBounds.bottom
        ) {
          // المؤشر داخل حدود السكشن
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
          gsap.to([circle, text], { duration: "auto", scale: 1 });
        } else {
          // المؤشر خارج حدود السكشن
          gsap.to([circle, text], { duration: "auto", scale: 0 });
        }
      };

      window.addEventListener("mousemove", onMouseMove);

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
      };
    }
  }, []);

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
