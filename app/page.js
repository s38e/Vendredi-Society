"use client";
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import CircleSection_1 from "./components/CircleSection_1";
import { useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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
  });
  return (
    <>
      <NavBar />
      <main className={styles.page}>
        <section className={`${styles.section_1} ${styles.section}`}>
          <div className={styles.vid}>
            <CircleSection_1 />
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
        <section className={`${styles.section_2} ${styles.section}`}>
          <p className={styles.heading}>
            Being visible is just no longer enough. It’s all about leveraging
            attention. And then moving forward together. Synced.
          </p>
          <div className={styles.body}>
            <p>[DIGITAL DESIGN STUDIO]</p>
            <div>
              <p className={styles.head}>Our motto</p>
              <p>
                <span>We deliver brands with high objectives</span> the strategy
                and the creativity it takes to have that impact, by teaming up
                with some of the best talents out there.
                <br />
                <br />
                Without ever compromising on keeping your teams happy and sane.
              </p>
            </div>
            <video src="/assets/videoSection2.mp4" loop autoPlay muted />
          </div>
        </section>
        <section className={`${styles.section_3} ${styles.section}`}></section>
      </main>
    </>
  );
}
