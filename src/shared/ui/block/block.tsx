import styles from "./block.module.css";

export function Block({ children }: { children: React.ReactNode }) {
  return <div className={styles.block}>{children}</div>;
}
