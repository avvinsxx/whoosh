import Image from "next/image";
import { MouseEvent } from "react";

import etc from "./etc.svg";
import styles from "./show-button.module.css";

export function ShowButton({
  clickHandler,
  alt = "Show more",
}: {
  clickHandler: () => void;
  alt?: string;
}) {
  function linkClickHandler(event: MouseEvent): void {
    event.preventDefault();
    clickHandler();
  }

  return (
    <a className={styles["show-button"]} href="#" onClick={linkClickHandler}>
      <Image src={etc} alt={alt} />
    </a>
  );
}
