import { CollaborateButton, H1, SliderPartners } from "@/src/shared/ui";
import styles from "./partners.module.css";

export default function Partners() {
  return (
    <section className={styles.partners}>
      <H1>Our Partners</H1>
      <SliderPartners />
      <CollaborateButton />
    </section>
  );
}
