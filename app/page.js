"use client";
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // ----------- Mouse Cercle ----------- //
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // ----------- Smooth Scroll ----------- //
    const lenis = new Lenis({
      duration: 1.2,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    // ----------- Mouse Cercle ----------- //
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
  });
  return (
    <>
      <NavBar />
      <main className={styles.page}>
        <section className={`${styles.section_1} ${styles.section}`}>
          <div className={styles.vid}>
            <div ref={circleRef} className={styles.cursor}></div>
            <div ref={textRef} className={styles.textInCursor}>
              Play Real
            </div>
            <button className={styles.buttonPlayReal}></button>
            <video
              src="/assets/heroVideo.mp4"
              className={styles.video}
              loop={true}
              muted={true}
              autoPlay={true}
            />
          </div>
          <div className={styles.texts}>
            <h1>
              Syncing fast-moving
              <br />
              brands with fast-moving
              <br />
              audiences.
            </h1>
            <button>Play Real</button>
          </div>
        </section>
        <section className={`${styles.section_2} ${styles.section}`}></section>
        <section className={`${styles.section_3} ${styles.section}`}></section>
      </main>
    </>
  );
}
