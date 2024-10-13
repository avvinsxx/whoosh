"use client";

import { useState } from "react";
import clsx from "clsx";

import styles from "./delivery-type.module.css";

export function DeliveryType() {
  const [type, setType] = useState<string>();
  return (
    <>
      <div className={styles["delivery-type"]}>
        <button
          className={clsx(
            styles["delivery-type__button"],
            styles["delivery-type__button_foot"],
            type === "foot" && styles["delivery-type__button_active"]
          )}
          type="button"
          onClick={() => setType("foot")}
        >
          <div className={styles["delivery-type__label"]}>up to 10lb</div>
        </button>
        <button
          className={clsx(
            styles["delivery-type__button"],
            styles["delivery-type__button_car"],
            type === "car" && styles["delivery-type__button_active"]
          )}
          type="button"
          onClick={() => setType("car")}
        >
          <div className={styles["delivery-type__label"]}>up to 130lb</div>
        </button>
        <button
          className={clsx(
            styles["delivery-type__button"],
            styles["delivery-type__button_truck"],
            type === "truck" && styles["delivery-type__button_active"]
          )}
          type="button"
          onClick={() => setType("truck")}
        >
          <div className={styles["delivery-type__label"]}>over 130lb</div>
        </button>
      </div>
      <input type="hidden" value={type} />
    </>
  );
}
