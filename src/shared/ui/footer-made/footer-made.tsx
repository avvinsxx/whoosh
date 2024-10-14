import styles from "./footer-made.module.css";

export function FooterMade() {
  return (
    <h6 className={styles["footer-made"]}>
      <span className={styles["footer-made__content"]}>Made by</span>
    </h6>
  );
}
