"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Button } from "../button/button";
import { Location } from "../location/location";
import { TrackInput } from "../track-input/track-input";
import close from "./assets/close.svg";
import open from "./assets/open.svg";
import styles from "./burger-menu.module.css";

export function BurgerMenu() {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [showMenu, setShowMenu] = useState(false);

  function openButtonClickHandler() {
    setShowMenu(true);
  }

  function closeButtonClickHandler() {
    setShowMenu(false);
  }

  useEffect(() => {
    if (showMenu) {
      const listener = (event: MouseEvent) => {
        if (
          menuRef.current &&
          !event.composedPath().includes(menuRef.current)
        ) {
          setShowMenu(false);
        }
      };
      document.addEventListener("mousedown", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
      };
    }
  }, [showMenu, menuRef]);

  return (
    <div className={styles["burger-menu"]}>
      <button
        className={styles["burger-menu__button-open"]}
        type="button"
        onClick={openButtonClickHandler}
      >
        <Image src={open} alt="Menu open icon" />
      </button>
      <div
        ref={menuRef}
        className={clsx(
          styles["burger-menu__menu"],
          showMenu && styles["burger-menu__menu_visible"]
        )}
      >
        <section>
          <button
            className={styles["burger-menu__button-close"]}
            type="button"
            onClick={closeButtonClickHandler}
          >
            <Image src={close} alt="Menu close icon" />
          </button>
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
