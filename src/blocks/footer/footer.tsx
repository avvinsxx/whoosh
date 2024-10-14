import Image from "next/image";

import { P } from "@/src/shared/ui";
import styles from "./footer.module.css";
import logo from "./logo.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div>
          <h4>About Whoosh</h4>
          <div>
            Express delivery of documents and parcels for organizations, express
            delivery of correspondence, purchases and other goods
          </div>
        </div>
        <div>
          <h4>Menu</h4>
          <ul>
            <li>About company</li>
            <li>Contacts</li>
            <li>Rules</li>
            <li>FAQ</li>
            <li>Reviews</li>
            <li>Cargo transportation</li>
            <li>Tariffs</li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            <li>Online stores</li>
            <li>Legal entity</li>
            <li>API Integration</li>
            <li>Contract</li>
            <li>Jobs</li>
            <li>Courier job</li>
            <li>The blog</li>
          </ul>
        </div>
        <div>
          <h4>Contact us</h4>
          <h5>8 800 934 5959</h5>
          <p>2545 W. Diversey Ave. 3rd Floor Chicago, IL 60647</p>
          <div>socials</div>
        </div>
      </div>
      <div>
        <P type="small">Privacy policy</P>
        <P type="small">© 2020. All right reserved.</P>
        <div>Made by</div>
        <div className="Logo">
          <Image src={logo} alt="Pyro Byte" />
        </div>
      </div>
    </footer>
  );
}
