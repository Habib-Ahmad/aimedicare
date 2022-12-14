import Benefits from "../components/benefits";
import Checker from "../components/checker";
import Consultation from "../components/consultation";
import Header from "../components/header";
import Offer from "../components/offer";
import styles from "../styles/home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Offer />
      <Checker />
      <Consultation />
      <Benefits />
    </div>
  );
};

export default Home;
