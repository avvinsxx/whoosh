import styles from "./h4.module.css";

export function H4({ children }: { children: React.ReactNode }) {
  return <h4 className={styles.h4}>{children}</h4>;
}
