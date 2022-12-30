import { Button } from "@mui/material";
import Image from "next/image";
import phone from "../../assets/benefits-phone.png";
import styles from "./styles.module.scss";

const Benefits = ({ handleOpen }) => {
  return (
    <div className={styles.container}>
      <Image src={phone} alt="" className={styles.phone} data-aos="fade-up" />

      <div
        className={styles.textWrapper}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2>Benefits of using our service</h2>
        <ul>
          <li>See a physician within an hour</li>
          <li>24/7 access to AiMedicare by app</li>
          <li>Doctors prescribes medication as necessary</li>
          <li>
            Prescriptions sent to the pharmacy of choice or the one closest to
            you
          </li>
          <li>Broaden access to quality health care</li>
          <li>Medical support while travelling in Canada and USA</li>
          <li>Physicians are board-certified and licensed</li>
          <li>Get help when you need it, wherever you are</li>
        </ul>

        <Button variant="contained" size="large" onClick={handleOpen}>
          Get Started for Free
        </Button>
      </div>
    </div>
  );
};

export default Benefits;
