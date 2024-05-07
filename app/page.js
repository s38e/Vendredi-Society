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
import Link from "next/link";
import img_1_Section3 from "@/public/assets/img_1_Section3.webp";

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
        <section className={`${styles.section_3} ${styles.section}`}>
          <div className={styles.card}>
            <Link href="">
              <div className={styles.Background}>
                <video src="/assets/video_1_Section3.mp4" loop autoPlay muted />
              </div>
              <div className={styles.Texts}>
                <div className={styles.top}>
                  <p>E-commerce solutions</p>
                  <h2>PrestaShop</h2>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.tag}>Brand Content</div>
                  <div className={styles.tag}>Motion Design</div>
                  <div className={styles.tag}>Campaign</div>
                </div>
              </div>
            </Link>
          </div>
          <div className={styles.card}>
            <Link href="">
              <div className={styles.Background}>
                <video src="/assets/video_2_Section3.mp4" loop autoPlay muted />
              </div>
              <div className={styles.Texts}>
                <div className={styles.top}>
                  <p>Internet of things</p>
                  <h2>Otio Home</h2>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.tag}>Motion Design</div>
                  <div className={styles.tag}>Branding</div>
                  <div className={styles.tag}>3D & concepts</div>
                  <div className={styles.tag}>Product Design</div>
                </div>
              </div>
            </Link>
          </div>
          <div className={styles.card}>
            <Link href="">
              <div className={styles.Background}>
                <Image src={img_1_Section3} alt="Press Play On Tape" />
              </div>
              <div className={styles.Texts}>
                <div className={styles.top}>
                  <p>Music Industry</p>
                  <h2>Press Play On Tape</h2>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.tag}>Branding</div>
                  <div className={styles.tag}>Website</div>
                  <div className={styles.tag}>Content</div>
                  <div className={styles.tag}>Strategy</div>
                </div>
              </div>
            </Link>
          </div>
        </section>
        <section className={`${styles.section_4} ${styles.section}`}>
          <h3 className={styles.heading}>
            An epic team for
            <br />
            <span>every vision</span>
          </h3>
        </section>
        <section className={`${styles.section_5} ${styles.section}`}></section>
      </main>
    </>
  );
}
