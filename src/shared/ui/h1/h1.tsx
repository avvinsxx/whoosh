import styles from "./h1.module.css";

export function H1({ children }: { children: React.ReactNode }) {
  return <h1 className={styles.h1}>{children}</h1>;
}
