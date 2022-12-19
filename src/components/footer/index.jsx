import { IconButton } from "@mui/material";
import Image from "next/image";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import google from "../../assets/google.svg";
import youtube from "../../assets/youtube.svg";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <IconButton>
          <Image src={facebook} alt="" className={styles.icon} />
        </IconButton>
        <IconButton
          href="https://mobile.twitter.com/aimedicarel"
          target="__blank"
        >
          <Image src={twitter} alt="" className={styles.icon} />
        </IconButton>
        <IconButton>
          <Image src={google} alt="" className={styles.icon} />
        </IconButton>
        <IconButton>
          <Image src={youtube} alt="" className={styles.icon} />
        </IconButton>
      </div>

      <p className={styles.copyright}>
        2022 @Aimedicare. All rights reserved. -- Privacy Policy - Terms of
        Services
      </p>
    </div>
  );
};

export default Footer;
