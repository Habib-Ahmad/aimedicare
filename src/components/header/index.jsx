import { Button } from "@mui/material";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import pattern from "../../assets/header-pattern.svg";
import phone from "../../assets/header-phone.png";
import styles from "./styles.module.scss";

const Header = ({ handleOpen }) => {
  return (
    <header className={styles.container}>
      <Image src={pattern} alt="" className={styles.pattern} />

      <div className={styles.nav}>
        <div className={styles.logoWrapper} data-aos="fade-down">
          <Image src={logo} alt="aimedicare" className={styles.logo} />
          <p>AiMedicare</p>
        </div>

        <Button
          variant="contained"
          size="large"
          onClick={handleOpen}
          data-aos="fade-down"
        >
          Get Started For Free
        </Button>
      </div>

      <div className={styles.content}>
        <div className={styles.textWrapper}>
          <h1 data-aos="fade-up">
            Your health, our <span>priority.</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="150">
            To fill the gap of an unequal distribution of specialist doctors in
            Nigeria. With AiMedicare, members can consult with a licenced
            doctors from all over the world within 30 mins of their request or
            they can schedule a time in the future that's more convenient. You
            can skip the long waiting period by talking to a doctor at the
            comfort of your home.
          </p>
          <Button
            variant="contained"
            size="large"
            onClick={handleOpen}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Get Started For Free
          </Button>
        </div>

        <Image
          src={phone}
          alt=""
          className={styles.phone}
          data-aos="fade-up"
          data-aos-delay="400"
        />
      </div>
    </header>
  );
};

export default Header;
