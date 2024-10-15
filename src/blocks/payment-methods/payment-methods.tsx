import { H1, SliderPayment } from "@/src/shared/ui";
import styles from "./payment-methods.module.css";

export default function PaymentMethods() {
  return (
    <section className={styles["payment-methods"]}>
      <H1>Payment method</H1>
      <SliderPayment />
    </section>
  );
}
