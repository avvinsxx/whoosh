import styles from "./footer-phone.module.css";

interface FooterPhoneProps {
  children: string;
}

export function FooterPhone({ children }: FooterPhoneProps) {
  return (
    <h6 className={styles["footer-phone"]}>
      <a className={styles["footer-phone__link"]} href={`tel:${children}`}>
        {children}
      </a>
    </h6>
  );
}
