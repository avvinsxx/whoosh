import styles from "./clear-button.module.css";

export function ClearButton({ children }: { children: React.ReactNode }) {
  return (
    <button className={styles["clear-button"]} type="reset">
      {children}
    </button>
  );
}
