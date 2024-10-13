import About from "@/src/blocks/about/about";
import Advantages from "@/src/blocks/advantages/advantages";
import Delivery from "@/src/blocks/delivery/delivery";
import Intro from "@/src/blocks/intro/intro";
import Partners from "@/src/blocks/partners/partners";
import PaymentMethods from "@/src/blocks/payment-methods/payment-methods";
import { Divider } from "@/src/shared/ui";

export default function Home() {
  return (
    <>
      <Intro />
      <Delivery />
      <Divider />
      <Partners />
      <Advantages />
      <PaymentMethods />
      <Divider />
      <About />
    </>
  );
}
