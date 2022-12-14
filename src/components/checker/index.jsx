import { Button } from "@mui/material";
import Image from "next/image";
import pattern from "../../assets/checker-pattern.svg";
import phone from "../../assets/checker-phone.png";
import styles from "./styles.module.scss";

const Checker = () => {
  return (
    <div className={styles.container}>
      <Image src={phone} alt="" className={styles.phone} />
      <Image src={pattern} alt="" className={styles.pattern} />

      <div className={styles.textWrapper}>
        <h2>Symptom Checker</h2>
        <p>
          Lorem ipseum all your tasks and projects and get real time insight on
          performance and time management in a single app. Enjoy maximum
          productivity with Promage.
        </p>

        <Button variant="contained" size="large">
          Get Started for Free
        </Button>
      </div>
    </div>
  );
};

export default Checker;
