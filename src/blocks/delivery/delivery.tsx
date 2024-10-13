import { Card, H1, H3, H4, P, RoundIcon } from "@/src/shared/ui";
import { DeliveryAdvantagesList } from "@/src/features/delivery-advantages-list";
import styles from "./delivery.module.css";

export default function Delivery() {
  return (
    <div className={styles.delivery}>
      <H1>Express delivery market revolution</H1>
      <H4>
        Express courier service in the city. We are a reliable logistics partner
        for delivery services for online stores and restaurants!
      </H4>
      <DeliveryAdvantagesList>
        <Card>
          <H3>Become a Courier</H3>
          <RoundIcon
            size="big"
            icon="courier"
            alt="Become a Courier"
          ></RoundIcon>
          <P>
            You choose a schedule. You decide how much and when to earn.
            Earnings from day one
          </P>
        </Card>

        <Card>
          <H3>Affiliate Program</H3>
          <RoundIcon
            size="big"
            icon="suitcase"
            alt="Affiliate Program"
          ></RoundIcon>
          <P>
            Use our service and feel new quality of this traditional service!
          </P>
        </Card>

        <Card>
          <H3>Help & Support</H3>
          <RoundIcon size="big" icon="support" alt="Help & Support"></RoundIcon>
          <P>Door-to-door delivery in 90 minutes or at your convenience</P>
        </Card>
      </DeliveryAdvantagesList>
    </div>
  );
}
