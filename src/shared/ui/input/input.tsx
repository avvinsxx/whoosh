import styles from "./input.module.css";

interface InputProps {
  label: string;
  placheloder: string;
  name: string;
}

export function Input({ label, placheloder, name }: InputProps) {
  return (
    <>
      <label className={styles.input__label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input__input}
        id={name}
        name={name}
        placeholder={placheloder}
      />
    </>
  );
}
