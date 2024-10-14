import Image from "next/image";

import menu from "./menu.svg";
import styles from "./burger-menu.module.css";
import { Button } from "../button/button";
import { TrackInput } from "../track-input/track-input";
import { Location } from "../location/location";

export function BurgerMenu() {
  return (
    <div className={styles["burger-menu"]}>
      <button className={styles["burger-menu__button"]} type="button">
        <Image src={menu} alt="Menu icon" />
      </button>
      <div className={styles["burger-menu__menu"]}>
        <section>
          <Location />
          <TrackInput />
          <nav className={styles["burger-menu__nav"]}>
            <a href="#" className={styles["burger-menu__item"]}>
              Send a Parcel
            </a>
            <a href="#" className={styles["burger-menu__item"]}>
              Become a Courier
            </a>
            <a href="#" className={styles["burger-menu__item"]}>
              Affiliate Program
            </a>
            <a href="#" className={styles["burger-menu__item"]}>
              Help & Support
            </a>
          </nav>
        </section>
        <Button type="blue">Take a complex order</Button>
      </div>
    </div>
  );
}
