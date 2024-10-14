"use client";

import clsx from "clsx";

import styles from "./delivery-type.module.css";

interface DeliveryTypeProps {
  deliveryType: string;
  deliveryTypeHandler: (deliveryType: string) => void;
}

export function DeliveryType({
  deliveryType,
  deliveryTypeHandler,
}: DeliveryTypeProps) {
  return (
    <>
      <div className={styles["delivery-type"]}>
        <button
          className={clsx(
            styles["delivery-type__button"],
            styles["delivery-type__button_foot"],
            deliveryType === "foot" && styles["delivery-type__button_active"]
          )}
          type="button"
          onClick={() => deliveryTypeHandler("foot")}
        >
          <div className={styles["delivery-type__label"]}>up to 10lb</div>
        </button>
        <button
          className={clsx(
            styles["delivery-type__button"],
            styles["delivery-type__button_car"],
            deliveryType === "car" && styles["delivery-type__button_active"]
          )}
          type="button"
          onClick={() => deliveryTypeHandler("car")}
        >
          <div className={styles["delivery-type__label"]}>up to 130lb</div>
        </button>
        <button
          className={clsx(
            styles["delivery-type__button"],
            styles["delivery-type__button_truck"],
            deliveryType === "truck" && styles["delivery-type__button_active"]
          )}
          type="button"
          onClick={() => deliveryTypeHandler("truck")}
        >
          <div className={styles["delivery-type__label"]}>over 130lb</div>
        </button>
      </div>
    </>
  );
}
