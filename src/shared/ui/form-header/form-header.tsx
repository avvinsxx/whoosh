import styles from "./form-header.module.css";

export function FormHeader({ children }: { children: React.ReactNode }) {
  return <h3 className={styles.h3}>{children}</h3>;
}
