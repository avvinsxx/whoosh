import styles from "./h3.module.css";

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className={styles.h3}>{children}</h3>;
}
