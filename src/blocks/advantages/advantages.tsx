import { Button, Card, H1, H3, H4, Link, P, RoundIcon } from "@/src/shared/ui";
import { AdvantagesList } from "@/src/widgets/advantages-list";
import styles from "./advantages.module.css";

export default function Advantages() {
  return (
    <section className={styles.advantages}>
      <H1>What we do</H1>
      <H4>
        Express courier service in the city. We are a reliable logistics partner
        for delivery services for online stores and restaurants!
      </H4>
      <AdvantagesList>
        <Card type="light">
          <RoundIcon
            size="small"
            icon="calc"
            alt="Online calculation"
          ></RoundIcon>
          <H3>
            Online{" "}
            <Link href="#" underline>
              calculation
            </Link>
          </H3>
          <P>
            Instant calculation of the cost in the order form, the price is
            updated in the process of filling out the form
          </P>
        </Card>
        <Card type="light">
          <RoundIcon
            size="small"
            icon="button-press"
            alt="Minimum paperwork"
          ></RoundIcon>
          <H3>Minimum paperwork</H3>
          <P>
            You can place an order for courier or freight delivery without
            registration and contract.
          </P>
        </Card>
        <Card type="light">
          <RoundIcon
            size="small"
            icon="payment"
            alt="Minimum paperwork"
          ></RoundIcon>
          <H3>Convenient payment</H3>
          <P>
            You can pay for delivery by card or in cash at any of the order
            addresses. For legal entities non-cash is available.
          </P>
        </Card>
      </AdvantagesList>
      <div className={styles["advantages_button-container"]}>
        <Button type="yellow">Get started</Button>
      </div>
    </section>
  );
}
