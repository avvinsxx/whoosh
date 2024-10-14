"use client";

import clsx from "clsx";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import alva from "./assets/alva.svg";
import fagor from "./assets/fagor.svg";
import guitar from "./assets/guitar.svg";
import radio from "./assets/radio.svg";
import tendo from "./assets/tendo.svg";
import styles from "./slider-partners.module.css";

export function SliderPartners() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
  });

  const [activeSlideNumber, setActiveSlideNumber] = useState<number>();

  const handleSlideChange = useCallback((emblaApi: EmblaCarouselType) => {
    const slides = emblaApi.slidesInView();
    if (slides.length === 3) {
      if (slides[2] === 4) {
        if (slides[1] === 1) {
          setActiveSlideNumber(0);
        } else if (slides[1] === 3 && slides[0] === 0) {
          setActiveSlideNumber(4);
        } else {
          setActiveSlideNumber(slides[1]);
        }
      } else {
        setActiveSlideNumber(slides[1]);
      }
    }
  }, []);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("slidesInView", handleSlideChange);
    }
  }, [emblaApi, handleSlideChange]);

  return (
    <section className={styles["slider-partners"]}>
      <div className={styles["slider-partners__viewport"]} ref={emblaRef}>
        <div className={styles["slider-partners__container"]}>
          <div className={styles["slider-partners__slide"]}>
            <div className={styles["slider-partners__slide-content"]}>
              <Image
                src={alva}
                alt="Alva"
                className={clsx(
                  styles["slider-partners__slide-image"],
                  !activeSlideNumber &&
                    styles["slider-partners__slide-image_active"]
                )}
              />
            </div>
          </div>
          <div className={styles["slider-partners__slide"]}>
            <div className={styles["slider-partners__slide-content"]}>
              <Image
                src={tendo}
                alt="Tendo"
                className={clsx(
                  styles["slider-partners__slide-image"],
                  activeSlideNumber === 1 &&
                    styles["slider-partners__slide-image_active"]
                )}
              />
            </div>
          </div>
          <div className={styles["slider-partners__slide"]}>
            <div className={styles["slider-partners__slide-content"]}>
              <Image
                src={fagor}
                alt="Fagor"
                className={clsx(
                  styles["slider-partners__slide-image"],
                  activeSlideNumber === 2 &&
                    styles["slider-partners__slide-image_active"]
                )}
              />
            </div>
          </div>
          <div className={styles["slider-partners__slide"]}>
            <div className={styles["slider-partners__slide-content"]}>
              <Image
                src={radio}
                alt="RadioShack"
                className={clsx(
                  styles["slider-partners__slide-image"],
                  activeSlideNumber === 3 &&
                    styles["slider-partners__slide-image_active"]
                )}
              />
            </div>
          </div>
          <div className={styles["slider-partners__slide"]}>
            <div className={styles["slider-partners__slide-content"]}>
              <Image
                src={guitar}
                alt="Guitar Center"
                className={clsx(
                  styles["slider-partners__slide-image"],
                  activeSlideNumber === 4 &&
                    styles["slider-partners__slide-image_active"]
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
