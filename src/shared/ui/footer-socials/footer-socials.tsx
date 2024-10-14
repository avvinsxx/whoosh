import { SocialLink } from "../social-link/social-link";
import styles from "./footer-socials.module.css";

export function FooterSocials() {
  return (
    <div className={styles["footer-socials"]}>
      <SocialLink type="fb" />
      <SocialLink type="vk" />
      <SocialLink type="yt" />
      <SocialLink type="insta" />
    </div>
  );
}
