import Image from "next/image";
import book from "../../assets/book-doctor.svg";
import symptoms from "../../assets/know-symptoms.svg";
import prescription from "../../assets/prescription.svg";
import vitals from "../../assets/monitor-vitals.svg";
import pattern from "../../assets/offer-pattern.svg";
import styles from "./styles.module.scss";

const Offer = () => {
  return (
    <div className={styles.container}>
      <Image src={pattern} alt="" className={styles.pattern} />
      <h2>What we offer</h2>

      <div className={styles.offers}>
        <div className={styles.offer}>
          <Image src={book} alt="" className={styles.icon} />
          <p className={styles.offerHeading}>Book a doctor</p>
          <p className={styles.offerDesc}>
            Click the “Book an appointment to forward your resquest”​
          </p>
        </div>
        <div className={styles.offer}>
          <Image src={symptoms} alt="" className={styles.icon} />
          <p className={styles.offerHeading}>Know your symptoms?​</p>
          <p className={styles.offerDesc}>
            Find the right Doctor and send the diagnosis before consultation​
          </p>
        </div>
        <div className={styles.offer}>
          <Image src={prescription} alt="" className={styles.icon} />
          <p className={styles.offerHeading}>Prescription</p>
          <p className={styles.offerDesc}>
            Receive Digital prescription and send to the pharmacy or pick it up
            yourself​
          </p>
        </div>
        <div className={styles.offer}>
          <Image src={vitals} alt="" className={styles.icon} />
          <p className={styles.offerHeading}>Monitor vitals remotely</p>
          <p className={styles.offerDesc}>
            Easily monitor your vitals anytime anywhere
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
