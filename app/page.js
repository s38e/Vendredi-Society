"use client";
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

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
          <video
            data-fullscreen-video="video"
            loop="true"
            muted="true"
            autoplay="true"
            width="100%"
            height="100%"
            src="/public/heroVideo.mp4"
          ></video>
        </section>
        <section className={`${styles.section_2} ${styles.section}`}></section>
        <section className={`${styles.section_3} ${styles.section}`}></section>
      </main>
    </>
  );
}
