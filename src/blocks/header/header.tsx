import clsx from "clsx";
import Image from "next/image";

import styles from "./header.module.css";
import profile from "./assets/profile.svg";
import logo from "./assets/logo.svg";
import { BurgerMenu } from "@/src/shared/ui";
import { TrackInput } from "@/src/shared/ui/track-input/track-input";
import { Location } from "@/src/shared/ui";

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <a className={styles["header__nav-item"]} href="#">
          Send a parcel
        </a>
        <a href="#" className={styles["header__nav-item"]}>
          Become a Courier
        </a>
        <a href="#">
          <Image src={profile} alt="Profile" />
        </a>
      </nav>
      <div className={clsx(styles["hide-mobile"])}>
        <TrackInput />
      </div>
      <div className={styles["header__logo-location"]}>
        <a href="#">
          <Image
            className={styles.header__image}
            src={logo}
            alt="Whoosh Logo"
          />
        </a>
        <div className={clsx(styles["hide-mobile"])}>
          <Location />
        </div>
      </div>
      <BurgerMenu />
    </header>
  );
}
