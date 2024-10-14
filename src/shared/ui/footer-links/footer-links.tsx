import styles from "./footer-links.module.css";

interface FooterLinksProps {
  links: { label: string; href: string }[];
}

export function FooterLinks({ links }: FooterLinksProps) {
  return (
    <ul className={styles["footer-links"]}>
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} className={styles["footer-links__link"]}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
