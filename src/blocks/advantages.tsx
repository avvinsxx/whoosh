import { Block, H1 } from "@/src/shared/ui";

export default function Delivery() {
  return (
    <Block>
      <H1>Advantages</H1>
      <p>
        Express courier service in the city. We are a reliable logistics partner
        for delivery services for online stores and restaurants!{" "}
      </p>
      <div>
        <div>
          <h3>
            Online <a href="#">calculation</a>
          </h3>
          <p>
            Instant calculation of the cost in the order form, the price is
            updated in the process of filling out the form
          </p>
        </div>
        <div>
          <h3>Minimum paperwork</h3>
          <p>
            You can place an order for courier or freight delivery without
            registration and contract.
          </p>
        </div>
        <div>
          <h3>Convenient payment</h3>
          <p>
            You can pay for delivery by card or in cash at any of the order
            addresses. For legal entities non-cash is available.
          </p>
        </div>
      </div>
      <button>Get started</button>
    </Block>
  );
}
