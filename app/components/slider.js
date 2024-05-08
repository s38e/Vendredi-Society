import Image from "next/image";
import styles from "./styles/Slider.module.css";
import { useEffect } from "react";

const Slider = () => {
  useEffect(() => {
    const lerp = (f0, f1, t) => (1 - t) * f0 + t * f1;
    const clamp = (val, min, max) => Math.max(min, Math.min(val, max));

    class DragScroll {
      constructor(obj) {
        this.el = document.querySelector(obj.el);
        this.wrap = document.querySelector(obj.wrap);
        this.items = document.querySelectorAll(obj.item);
        this.bar = document.querySelector(obj.bar);
        this.init();
      }
      init() {
        this.progress = 0;
        this.speed = 0;
        this.oldX = 0;
        this.x = 0;
        this.playrate = 0;

        this.bindings();
        this.events();
        this.calculate();
        this.raf();
      }

      bindings() {
        [
          "events",
          "calculate",
          "raf",
          "handleWheel",
          "move",
          "handleTouchStart",
          "handleTouchMove",
          "handleTouchEnd",
        ].forEach((method) => {
          this[method] = this[method].bind(this);
        });
      }

      calculate() {
        this.progress = 0;
        this.wrapWidth = this.items[0].clientWidth * this.items.length;
        this.wrap.style.width = `${this.wrapWidth}px`;
        this.maxScroll = this.wrapWidth - this.el.clientWidth;
      }

      handleWheel(e) {
        this.progress += e.deltaY;
        this.move();
      }

      handleTouchStart(e) {
        e.preventDefault();
        this.dragging = true;
        this.startX = e.clientX || e.touches[0].clientX;
      }

      handleTouchMove(e) {
        if (!this.dragging) return false;
        const x = e.clientX || e.touches[0].clientX;
        this.progress += (this.startX - x) * 2.5;
        this.startX = x;
        this.move();
      }

      handleTouchEnd() {
        this.dragging = false;
      }

      move() {
        this.progress = clamp(this.progress, 0, this.maxScroll);
      }

      events() {
        window.addEventListener("resize", this.calculate);
        window.addEventListener("wheel", this.handleWheel);

        this.el.addEventListener("touchstart", this.handleTouchStart);
        window.addEventListener("touchmove", this.handleTouchMove);
        window.addEventListener("touchend", this.handleTouchEnd);

        window.addEventListener("mousedown", this.handleTouchStart);
        window.addEventListener("mousemove", this.handleTouchMove);
        window.addEventListener("mouseup", this.handleTouchEnd);
        document.body.addEventListener("mouseleave", this.handleTouchEnd);
      }

      raf() {
        this.x = lerp(this.x, this.progress, 0.1);
        this.playrate = this.x / this.maxScroll;

        this.wrap.style.transform = `translateX(${-this.x}px)`;
        this.bar.style.transform = `scaleX(${0.18 + this.playrate * 0.82})`;

        this.speed = Math.min(100, this.x - this.oldX);
        this.oldX = this.x;

        this.scale = lerp(this.scale, this.speed, 0.1);
        this.items.transform = `scale(${1 - Math.abs(this.speed) * 0.005})`;
        document.querySelector("img").style.transform = `scaleX(${
          1 + Math.abs(this.speed) * 0.004
        })`;

        // Check if slider reached the end
        if (this.progress >= this.maxScroll) {
          // Reset progress to start the loop
          this.progress = 0;
          this.x = 0;
          this.oldX = 0;
        }
      }
    }

    const scroll = new DragScroll({
      el: `.${styles.slider}`,
      wrap: `.${styles.sliderWrapper}`,
      item: `.${styles.sliderItem}`,
      bar: `.${styles.sliderBar}`,
    });

    const animationScroll = () => {
      requestAnimationFrame(animationScroll);
      scroll.raf();
    };
    animationScroll();
  });

  return (
    <div className={styles.slider}>
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderItem}>
          <figure>
            <p className={styles.clientReview}>
              ”The teams' creativity and technical expertise brought our vision
              to life in an exceptional way. What really sets Vendredi Society
              apart is their commitment to excellence.”
            </p>
            <div className={styles.clientInfo}>
              <Image
                src="/assets/cleint_1.webp"
                alt=""
                width={50}
                height={50}
              />
              <div className={styles.texts}>
                <p>Emmanuelle Paolasini</p>
                <p>Lead Brand Designer @PrestaShop</p>
              </div>
            </div>
          </figure>
        </div>
        <div className={styles.sliderItem}>
          <figure>
            <p className={styles.clientReview}>
              ”Vendredi Society's ability to dive in a complex context to
              rethink and optimise the user experience allows us to increase the
              ROI of our programmes.”
            </p>
            <div className={styles.cleintInfo}>
              <Image
                src="/assets/cleint_2.webp"
                alt=""
                width={50}
                height={50}
              />
              <div className={styles.texts}>
                <p>Aurélien Maestracci</p>
                <p>Chief Digital Officer @Otio</p>
              </div>
            </div>
          </figure>
        </div>
        <div className={styles.sliderItem}>
          <figure>
            <p className={styles.clientReview}>
              ”A tailor-made creative experience and a project mastered from
              start to finish. We were able to fully embody our new brand
              platform on our PrestaShop essentials.”
            </p>
            <div className={styles.cleintInfo}>
              <Image
                src="/assets/cleint_3.webp"
                alt=""
                width={50}
                height={50}
              />
              <div className={styles.texts}>
                <p>Caroline Baussan</p>
                <p>VP Brand Experience @PrestaShop</p>
              </div>
            </div>
          </figure>
        </div>
        <div className={styles.sliderItem}>
          <figure>
            <p className={styles.clientReview}>
              ”They fuse reliability and creativity in a way that makes the
              experience both rewarding and exciting. And don't let the name
              fool you - they rock all week.”
            </p>
            <div className={styles.cleintInfo}>
              <Image
                src="/assets/cleint_4.webp"
                alt=""
                width={50}
                height={50}
              />
              <div className={styles.texts}>
                <p>Loïc Bénart</p>
                <p>CEO @PressPlayOnTape</p>
              </div>
            </div>
          </figure>
        </div>
        <div className={styles.sliderItem}>
          <figure>
            <p className={styles.clientReview}>
              ”Your flexibility and agility enabled us to absorb the heavy
              workload and our additional demands, all without the slightest
              impact on our side.”
            </p>
            <div className={styles.cleintInfo}>
              <Image
                src="/assets/cleint_5.webp"
                alt=""
                width={50}
                height={50}
              />
              <div className={styles.texts}>
                <p>Valentine Boucher</p>
                <p>Lead PM @PrestaShop</p>
              </div>
            </div>
          </figure>
        </div>
      </div>
      <div className={styles.sliderBar}></div>
    </div>
  );
};

export default Slider;
