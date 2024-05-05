"use client";
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/NavBar";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // ----------- Mouse Cercle ----------- //
  const [isInside, setIsInside] = useState(false); // حالة لتتبع ما إذا كانت الدائرة داخل السكشن أو لا
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // حالة لتخزين إحداثيات المؤشر داخل السكشن

  // دالة لتحديث إحداثيات المؤشر وحالة الدائرة عند تحرك المؤشر داخل السكشن
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event; // الحصول على إحداثيات المؤشر
    setMousePosition({ x: clientX, y: clientY });

    // تحديث حالة الدائرة بناءً على موقع المؤشر داخل السكشن
    setIsInside(
      clientX >= event.target.offsetLeft &&
        clientX <= event.target.offsetLeft + event.target.offsetWidth &&
        clientY >= event.target.offsetTop &&
        clientY <= event.target.offsetTop + event.target.offsetHeight
    );
  };
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
          {/* <div className={styles.cursor}></div> */}
          <video
            src="/public/heroVideo.mp4"
            data-src="/public/heroVideo.mp4"
            data-fullscreen-video="video"
            loop="true"
            muted="true"
            autoplay="true"
          />
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
