import Image from "next/image";

import {
  FooterHeader,
  FooterLinks,
  FooterLocation,
  FooterMade,
  FooterPhone,
  FooterPolicy,
  FooterSocials,
  P,
} from "@/src/shared/ui";
import logo from "./assets/logo.svg";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__row}>
          <div className={styles["footer__section-about"]}>
            <FooterHeader>About Whoosh</FooterHeader>
            <div className={styles["footer__about-message"]}>
              Express delivery of documents and parcels for organizations,
              express delivery of correspondence, purchases and other goods
            </div>
          </div>
          <div className={styles["footer__section-links"]}>
            <FooterHeader type="underlined">Menu</FooterHeader>
            <FooterLinks
              links={[
                { label: "About company", href: "#" },
                { label: "Contacts", href: "#" },
                { label: "Rules", href: "#" },
                { label: "FAQ", href: "#" },
                { label: "Reviews", href: "#" },
                { label: "Cargo transportation", href: "#" },
                { label: "Tariffs", href: "#" },
              ]}
            />
          </div>
          <div className={styles["footer__section-links"]}>
            <FooterHeader type="underlined">Services</FooterHeader>
            <FooterLinks
              links={[
                { label: "Online stores", href: "#" },
                { label: "Legal entity", href: "#" },
                { label: "API Integration", href: "#" },
                { label: "Contract", href: "#" },
                { label: "Jobs", href: "#" },
                { label: "Courier job", href: "#" },
                { label: "The blog", href: "#" },
              ]}
            />
          </div>
          <div className={styles["footer__section-contacts"]}>
            <FooterHeader type="underlined">Contact us</FooterHeader>
            <FooterPhone>8 800 934 5959</FooterPhone>
            <FooterLocation>
              2545 W. Diversey Ave. 3rd Floor Chicago, IL 60647
            </FooterLocation>
            <FooterSocials />
          </div>
        </div>
        <div className={styles.footer__copyrights}>
          <FooterPolicy />
          <P type="small" className={styles.footer__copy}>
            © 2020. All right reserved.
          </P>
          <FooterMade />
          <div className={styles.footer__logo}>
            <Image src={logo} alt="Pyro Byte" />
          </div>
        </div>
      </div>
    </footer>
  );
}
