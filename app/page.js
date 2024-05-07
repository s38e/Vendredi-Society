"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import NavBar from "./components/NavBar";
import img_1_Section3 from "@/public/assets/img_1_Section3.webp";
import img_1_Section4 from "@/public/assets/img_1_Section4.webp";
import img_2_Section4 from "@/public/assets/img_2_Section4.webp";
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
    // ----------- 3D Card Slider ----------- //
    gsap.to(
      `.${styles.section_4} .${styles.body} .${styles.card}:nth-child(1)`,
      {
        scale: 0.6,
        y: "-10%",
        z: 10,
        opacity: 0,
        scrollTrigger: {
          trigger: `.${styles.section_4} .${styles.body}`,
          scrub: 1,
          // markers: true,
          start: "top 6%",
          end: "bottom 6%",
        },
      }
    );
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
          <div className={styles.body}>
            <div className={styles.card}>
              <div className={styles.top}>
                <span className={styles.count}>01</span>
                <h4>
                  Your own
                  <br />
                  top-dogs
                  <br />
                  team
                </h4>
              </div>
              <div className={styles.bottom}>
                <Image src={img_1_Section4} alt="Your own top-dogs team" />
                <div>
                  <p>
                    <span>Custom talents.</span> The perfect gang of
                    high-profile creatives to exceed your business objectives.
                    Full focus. Full grit.
                  </p>
                  <button>Our model</button>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.top}>
                <span className={styles.count}>02</span>
                <h4>
                  Big project?
                  <br />
                  Team scales
                </h4>
              </div>
              <div className={styles.bottom}>
                <Image src={img_2_Section4} alt="Big project? Team scales" />
                <div>
                  <p>
                    <span>Scalable workforce.</span> Your marketing needs
                    getting more intense? Get extra designers, copywriters or
                    developers ready to execute. Already up-to-date on the
                    project, of course.
                  </p>
                  <button>Our model</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.section_5} ${styles.section}`}>
          <div className={styles.left}>
            <h3>
              Made for
              <br />
              <span>big-time returns.</span>
            </h3>
          </div>
          <div className={styles.right}></div>
        </section>
        <section className={`${styles.section_6} ${styles.section}`}></section>
      </main>
    </>
  );
}
