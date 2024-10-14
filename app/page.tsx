import About from "@/src/blocks/about/about";
import Advantages from "@/src/blocks/advantages/advantages";
import Delivery from "@/src/blocks/delivery/delivery";
import Footer from "@/src/blocks/footer/footer";
import { Header } from "@/src/blocks/header/header";
import Intro from "@/src/blocks/intro/intro";
import Partners from "@/src/blocks/partners/partners";
import PaymentMethods from "@/src/blocks/payment-methods/payment-methods";
import { Divider } from "@/src/shared/ui";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <Delivery />
      <Divider />
      <Partners />
      <Advantages />
      <PaymentMethods />
      <Divider />
      <About />
      <Footer />
    </>
  );
}
