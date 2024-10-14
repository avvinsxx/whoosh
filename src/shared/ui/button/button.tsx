"use client";

import clsx from "clsx";
import { useFormStatus } from "react-dom";

import styles from "./button.module.css";

interface ButtonProps {
  type?: "yellow" | "blue";
  children: React.ReactNode;
}

export function Button({ type, children }: ButtonProps) {
  const { pending: formInProgress } = useFormStatus();

  return (
    <button
      disabled={formInProgress}
      className={clsx(
        styles.button,
        styles["button_" + type],
        formInProgress && styles.button_disabled
      )}
    >
      {children}
    </button>
  );
}
