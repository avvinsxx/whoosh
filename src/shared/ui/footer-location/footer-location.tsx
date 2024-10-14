import styles from "./footer-location.module.css";

interface FooterLocationProps {
  children: React.ReactNode;
}

export function FooterLocation({ children }: FooterLocationProps) {
  return <div className={styles["footer-location"]}>{children}</div>;
}
