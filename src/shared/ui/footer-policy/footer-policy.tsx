import styles from "./footer-policy.module.css";

export function FooterPolicy() {
  return (
    <div className={styles["footer-policy"]}>
      <a href="#" className={styles["footer-policy__content"]}>
        Privacy policy
      </a>
    </div>
  );
}
