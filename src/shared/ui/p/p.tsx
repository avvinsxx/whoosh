import clsx from "clsx";
import styles from "./p.module.css";

interface PProps {
  type?: "regular" | "small";
  children: React.ReactNode;
}

export function P({ type = "regular", children }: PProps) {
  return <p className={clsx(styles.p, styles["p_" + type])}>{children}</p>;
}
