"use client";

import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import alva from "@/assets/partners/alva.svg";
import fagor from "@/assets/partners/fagor.svg";
import guitar from "@/assets/partners/guitar.svg";
import radio from "@/assets/partners/radio.svg";
import tendo from "@/assets/partners/tendo.svg";
import styles from "./slider.module.css";

export function Slider() {
  return (
    <Swiper
      className={styles.slider}
      spaceBetween={16}
      slidesPerView={"auto"}
      centeredSlides={true}
      loop={true}
      onSlideChange={(swiper) => {
        console.log(swiper.activeIndex);
      }}
    >
      <SwiperSlide className={styles.slider__slide}>
        <Image src={alva} alt="Alva" className={styles.slider__image} />
      </SwiperSlide>
      <SwiperSlide className={styles.slider__slide}>
        <Image src={tendo} alt="Tendo" className={styles.slider__image} />
      </SwiperSlide>
      <SwiperSlide className={styles.slider__slide}>
        <Image src={fagor} alt="Fagor" className={styles.slider__image} />
      </SwiperSlide>
      <SwiperSlide className={styles.slider__slide}>
        <Image src={radio} alt="RadioShark" className={styles.slider__image} />
      </SwiperSlide>
      <SwiperSlide className={styles.slider__slide}>
        <Image
          src={guitar}
          alt="Guitar Center"
          className={styles.slider__image}
        />
      </SwiperSlide>
    </Swiper>
  );
}
