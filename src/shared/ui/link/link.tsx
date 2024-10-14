import clsx from "clsx";
import styles from "./link.module.css";

interface LinkProps {
  href: string;
  underline?: boolean;
  children: React.ReactNode;
}

export function Link({ href, underline = false, children }: LinkProps) {
  return (
    <a
      href={href}
      className={clsx(styles.link, underline === true && styles.link_underline)}
    >
      {children}
    </a>
  );
}
