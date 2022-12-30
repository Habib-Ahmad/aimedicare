import { Button } from "@mui/material";
import Image from "next/image";
import phone from "../../assets/consultation-phone.png";
import styles from "./styles.module.scss";

const Consultation = ({ handleOpen }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textWrapper} data-aos="fade-up">
          <h2>Audio and Video Consultation</h2>
          <ul>
            <li>Talk to a licensed physician by voice or video.</li>
            <li>
              See a doctor within 30 mins, schedule a call at the best time for
              you
            </li>
            <li>
              Get treated for non- emergency conditions like the flu,
              bronchitis, and much more.
            </li>
          </ul>

          <Button variant="contained" size="large" onClick={handleOpen}>
            Get Started for Free
          </Button>
        </div>

        <Image
          src={phone}
          alt=""
          className={styles.phone}
          data-aos="fade-up"
          data-aos-delay="200"
        />
      </div>
    </div>
  );
};

export default Consultation;
