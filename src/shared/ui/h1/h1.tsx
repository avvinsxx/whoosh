import clsx from "clsx";
import styles from "./h1.module.css";

interface H1Props {
  align?: "center" | "left";
  children: React.ReactNode;
}

export function H1({ align = "center", children }: H1Props) {
  return <h1 className={clsx(styles.h1, styles["h1_" + align])}>{children}</h1>;
}
