import styles from "./track-input.module.css";

export function TrackInput() {
  return (
    <form action="">
      <input
        placeholder="Track a package"
        className={styles["track-input"]}
        type="text"
      />
    </form>
  );
}
