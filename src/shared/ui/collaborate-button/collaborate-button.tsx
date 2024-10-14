import Image from "next/image";

import collab from "./collab.svg";
import styles from "./collaborate-button.module.css";

export function CollaborateButton() {
  return (
    <button className={styles["collaborate-button"]}>
      <Image src={collab} alt="Collaborate" /> Let&apos;s collaborate
    </button>
  );
}
