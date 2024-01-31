import styles from "./pageNotFound.module.css";
import erro404 from "./erro404.png";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer/Footer.jsx";

export function PageNotFound() {
  return (
    <>
      <Header />
      <h2>Ops, Conteúdo não loicalizado!!</h2>
      <section className={styles.container}>
        <img src={erro404} alt="Logo 404" />
      </section>
      <Footer />
    </>
  );
}
