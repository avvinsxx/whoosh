import clsx from "clsx";

import styles from "./h3.module.css";

interface H3Props {
  children: React.ReactNode;
}
export function H3({ children }: H3Props) {
  return <h3 className={styles.h3}>{children}</h3>;
}
