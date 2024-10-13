import styles from "./collaborate-button.module.css";
import collab from "./collab.svg";
import Image from "next/image";

export function CollaborateButton() {
  return (
    <button className={styles["collaborate-button"]}>
      <Image src={collab} alt="Collaborate" /> Let's collaborate
    </button>
  );
}
