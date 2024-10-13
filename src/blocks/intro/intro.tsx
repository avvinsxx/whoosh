import Image from "next/image";

import { SendParcel } from "@/src/widgets/send-parcel";
import { H1, H3, Link, P } from "@/src/shared/ui";
import styles from "./intro.module.css";
import { TrackPackage } from "@/src/widgets/track-package";
import more from "./assets/more.svg";
import video from "./assets/video.png";

export default function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.intro__container}>
        <div>
          <SendParcel />
          <TrackPackage />
        </div>

        <div className={styles.intro__about}>
          <H1 align="left">Our service started work in New York</H1>
          <div className={styles["intro__about-text"]}>
            <P>
              We make delivery exactly at the time you need - we can start to
              fulfill the order a few minutes after it arrives, or we can
              deliver on a specific day and hour.
            </P>
          </div>

          <div className={styles["intro__about-more"]}>
            <Link underline={false} href="#">
              Read more <Image src={more} alt="Read more" />
            </Link>
          </div>

          <div className={styles.intro__how}>
            <H3>How it works</H3>
            <Image
              src={video}
              alt="How it work video"
              className={styles["intro__how-image"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
