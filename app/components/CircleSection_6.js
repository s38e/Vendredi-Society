import styles from "./styles/CircleSection_6.module.css";
import stylesPage from "@/app/page.module.css";
import arrowRight from "@/public/assets/arrowRight.svg";
import { useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";
import gsap from "gsap";
import Image from "next/image";

const CircleSection_6 = () => {
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!isMobile) {
      const circle = circleRef.current;
      const text = textRef.current;

      // جعل العناصر غير مرئية في البداية
      // gsap.set([circle, text], { duration: "auto", scale: 0, opacity: 0 });

      const onMouseMove = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const parentBounds = circle
          .closest(`.${stylesPage.section_6} .${stylesPage.body}`)
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
          gsap.to([circle, text], { duration: "auto", scale: 1, opacity: 1 });
        } else {
          // المؤشر خارج حدود السكشن
          gsap.to([circle, text], { duration: "auto", scale: 0, opacity: 0 });
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
      <div ref={circleRef} className={styles.circle}>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 4.5C11.2761 4.5 11.5 4.27614 11.5 4C11.5 3.72386 11.2761 3.5 11 3.5L11 4.5ZM0.646446 3.64645C0.451184 3.84171 0.451184 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659729 4.53553 0.464467C4.34027 0.269205 4.02369 0.269205 3.82843 0.464467L0.646446 3.64645ZM11 3.5L1 3.5L1 4.5L11 4.5L11 3.5Z"
            fill="black"
          />
        </svg>
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464467C7.97631 0.269205 7.65973 0.269205 7.46447 0.464467C7.2692 0.659729 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM1 4.5L11 4.5L11 3.5L1 3.5L1 4.5Z"
            fill="black"
          />
        </svg>
      </div>
      <div ref={textRef} className={styles.textInCircle}>
        Drag
      </div>
    </>
  );
};

export default CircleSection_6;
