import Image from "next/image";
import logo from "../assets/logo.svg";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.plug}>
      <Image
        className={styles.plug__image}
        src={logo}
        alt="Whoosh logo"
        priority
      />
    </div>
  );
}
