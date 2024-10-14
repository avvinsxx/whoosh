import Image from "next/image";

import fb from "./assets/fb.svg";
import insta from "./assets/insta.svg";
import vk from "./assets/vk.svg";
import yt from "./assets/yt.svg";
import styles from "./social-link.module.css";

interface SocialLinkProps {
  type: "fb" | "vk" | "yt" | "insta";
}

export function SocialLink({ type }: SocialLinkProps) {
  return (
    <a href="#" target="_blank" className={styles["social-link"]}>
      {type === "fb" && <Image src={fb} alt="Facebook" />}
      {type === "vk" && <Image src={vk} alt="VK" />}
      {type === "yt" && <Image src={yt} alt="Youtube" />}
      {type === "insta" && <Image src={insta} alt="Instagram" />}
    </a>
  );
}
