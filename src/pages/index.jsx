import Checker from "../components/checker";
import Header from "../components/header";
import Offer from "../components/offer";
import styles from "../styles/home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Offer />
      <Checker />
    </div>
  );
};

export default Home;
