"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

import {
  Button,
  ClearButton,
  DeliveryType,
  FormHeader,
  Info,
  Input,
} from "@/src/shared/ui";
import { State, action } from "../api/action";
import styles from "./send-parcel.module.css";

export function SendParcel() {
  const initialState: State = { message: null, errors: {}, success: false };
  const [state, formAction] = useFormState(action, initialState);
  const [deliveryType, setDeliveryType] = useState("");

  useEffect(() => {
    if (state.success) {
      toast.success("Request accepted.");
    }
    if (state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <div className={styles["send-parcel"]}>
      <div className={styles["send-parcel__header"]}>
        <FormHeader>Send a parcel</FormHeader>
        <Info />
      </div>
      <form action={formAction} onReset={() => setDeliveryType("")}>
        <DeliveryType
          deliveryType={deliveryType}
          deliveryTypeHandler={setDeliveryType}
        />
        <input type="hidden" value={deliveryType} name="deliveryType" />

        <div className={styles["send-parcel__inputs"]}>
          <div
            className={clsx(
              styles["send-parcel__input"],
              styles["send-parcel__input_sm-margin"]
            )}
          >
            <Input
              name="pickupLocation"
              label="Pickup location"
              placheloder="location"
            />
          </div>
          <div className={styles["send-parcel__input"]}>
            <Input
              name="dropLocation"
              label="Drop location"
              placheloder="location"
            />
          </div>
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
