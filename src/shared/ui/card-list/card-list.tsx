import styles from "./card-list.module.css";

export function CardList({ children }: { children: React.ReactNode }) {
  return <div className={styles["card-list"]}>{children}</div>;
}
