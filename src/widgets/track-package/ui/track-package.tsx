import { FormHeader } from "@/src/shared/ui";
import styles from "./track-package.module.css";

export function TrackPackage() {
  return (
    <div className={styles["track-package"]}>
      <FormHeader>Track a package</FormHeader>
      <form>
        <input
          className={styles["track-package__input"]}
          placeholder="Enter code"
        />
      </form>
    </div>
  );
}
