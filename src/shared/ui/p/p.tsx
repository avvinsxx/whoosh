import styles from "./p.module.css";

export function P({ children }: { children: React.ReactNode }) {
  return <p className={styles.p}>{children}</p>;
}
