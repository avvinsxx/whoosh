import clsx from "clsx";

import {
  Button,
  ClearButton,
  DeliveryType,
  FormHeader,
  Info,
  Input,
} from "@/src/shared/ui";
import styles from "./send-parcel.module.css";

export function SendParcel() {
  return (
    <div className={styles["send-parcel"]}>
      <div className={styles["send-parcel__header"]}>
        <FormHeader>Send a parcel</FormHeader>
        <Info />
      </div>
      <form action="">
        <DeliveryType />

        <div
          className={clsx(
            styles["send-parcel__input"],
            styles["send-parcel__input_sm-margin"]
          )}
        >
          <Input
            name="pickup-location"
            label="Pickup location"
            placheloder="location"
          />
        </div>
        <div className={styles["send-parcel__input"]}>
          <Input
            name="drop-location"
            label="Drop location"
            placheloder="location"
          />
        </div>

        <div className={styles["send-parcel__button"]}>
          <Button type="blue">Order</Button>
        </div>
        <div className={styles["send-parcel__button-clear"]}>
          <ClearButton>Clear All</ClearButton>
        </div>
      </form>
    </div>
  );
}
