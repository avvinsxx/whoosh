import { InfoIcon } from "../info-icon/info-icon";
import { P } from "../p/p";
import styles from "./info.module.css";

export function Info() {
  return (
    <div className={styles.info}>
      <InfoIcon className={styles.info__icon} />
      <div className={styles.info__message}>
        <P type="small">
          A commission is a piece of work that someone is asked to do and is
          paid for.
        </P>
      </div>
    </div>
  );
}
