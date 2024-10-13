import clsx from "clsx";
import styles from "./card.module.css";

interface CardProps {
  type?: "regular" | "light";
  children: React.ReactNode;
}

export function Card({ type = "regular", children }: CardProps) {
  return (
    <div className={clsx(styles.card, styles["card_" + type])}>{children}</div>
  );
}
