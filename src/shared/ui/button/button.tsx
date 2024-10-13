import clsx from "clsx";
import styles from "./button.module.css";

interface ButtonProps {
  type?: "yellow" | "blue";
  children: React.ReactNode;
}

export function Button({ type, children }: ButtonProps) {
  return (
    <button className={clsx(styles.button, styles["button_" + type])}>
      {children}
    </button>
  );
}
