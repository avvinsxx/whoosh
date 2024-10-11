import Delivery from "@/src/blocks/delivery";
import Partners from "@/src/blocks/partners";
import { Divider } from "@/src/shared/ui";

export default function Home() {
  return (
    <>
      <Delivery />
      <Divider />
      <Partners />
    </>
  );
}
