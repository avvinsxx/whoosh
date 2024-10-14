import clsx from "clsx";

import styles from "./footer-header.module.css";

interface FooterHeaderProps {
  type?: "regular" | "underlined";
  children: React.ReactNode;
}

export function FooterHeader({
  type = "regular",
  children,
}: FooterHeaderProps) {
  return (
    <h5
      className={clsx(styles["footer-header"], styles["footer-header_" + type])}
    >
      {children}
    </h5>
  );
}
