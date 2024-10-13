import clsx from "clsx";
import Image from "next/image";

import styles from "./round-icon.module.css";

interface RoundIconProps {
  size: "big" | "small";
  icon:
    | "suitcase"
    | "courier"
    | "support"
    | "payment"
    | "button-press"
    | "calc";
  alt: string;
}

export function RoundIcon({ size, icon, alt }: RoundIconProps) {
  return (
    <div className={clsx(styles.round, styles["round_" + size])}>
      <Image
        src={`/assets/img/round-icons/${icon}.svg`}
        width={size === "big" ? 48 : 40}
        height={size === "big" ? 48 : 40}
        alt={alt}
        priority
      />
    </div>
  );
}
