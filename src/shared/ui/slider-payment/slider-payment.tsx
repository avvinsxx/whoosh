"use client";
import Image from "next/image";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import styles from "./slider-payment.module.css";
import google from "./assets/google-pay.png";
import sofort from "./assets/sofort.png";
import unionPay from "./assets/union-pay.png";
import visa from "./assets/visa.png";
import mastercard from "./assets/mastercard.png";
import amex from "./assets/amex.png";
import left from "./assets/left.svg";
import right from "./assets/right.svg";

export function SliderPayment() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const prevButtonClickHandler = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const nextButtonClickHandler = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className={styles["slider-payment"]}>
      <button
        className={styles["slider-payment__button"]}
        onClick={prevButtonClickHandler}
      >
        <Image src={left} alt="Prev slide" />
      </button>
      <div className={styles["slider-payment__viewport"]} ref={emblaRef}>
        <div className={styles["slider-payment__container"]}>
          <div className={styles["slider-payment__slide"]}>
            <Image
              src={google}
              alt="Google Pay"
              className={styles["slider-payment__slide-content"]}
            />
          </div>
          <div className={styles["slider-payment__slide"]}>
            <Image
              src={sofort}
              alt="Sofort"
              className={styles["slider-payment__slide-content"]}
            />
          </div>
          <div className={styles["slider-payment__slide"]}>
            <Image
              src={unionPay}
              alt="Union Pay"
              className={styles["slider-payment__slide-content"]}
            />
          </div>
          <div className={styles["slider-payment__slide"]}>
            <Image
              src={visa}
              alt="Visa"
              className={styles["slider-payment__slide-content"]}
            />
          </div>
          <div className={styles["slider-payment__slide"]}>
            <Image
              src={mastercard}
              alt="Mastercard"
              className={styles["slider-payment__slide-content"]}
            />
          </div>
          <div className={styles["slider-payment__slide"]}>
            <Image
              src={amex}
              alt="amex"
              className={styles["slider-payment__slide-content"]}
            />
          </div>
        </div>
      </div>
      <button
        className={styles["slider-payment__button"]}
        onClick={nextButtonClickHandler}
      >
        <Image src={right} alt="Next slide" />
      </button>
    </section>
  );
}
