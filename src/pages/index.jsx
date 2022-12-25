import { useState } from "react";
import { Modal } from "@mui/material";
import Benefits from "../components/benefits";
import Checker from "../components/checker";
import Consultation from "../components/consultation";
import Footer from "../components/footer";
import Header from "../components/header";
import Offer from "../components/offer";
import SubscribeCard from "../components/subscribeCard";
import styles from "../styles/home.module.scss";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.container}>
      <Header {...{ handleOpen }} />
      <Offer />
      <Checker {...{ handleOpen }} />
      <Consultation {...{ handleOpen }} />
      <Benefits {...{ handleOpen }} />
      <Footer />

      <Modal open={open} onClose={handleClose}>
        <div className={styles.modalContent}>
          <SubscribeCard {...{ handleClose }} />
        </div>
      </Modal>
    </div>
  );
};

export default Home;
