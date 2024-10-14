import Image from "next/image";

import styles from "./location.module.css";
import pin from "./pin.svg";

export function Location() {
  return (
    <div className={styles.location}>
      <Image src={pin} alt="Location" className={styles.location__icon} />
      <a href="#" className={styles.location__link}>
        NY, Manhattan
      </a>
    </div>
  );
}
