import styles from "./Search.module.css";
import Header from "../../Components/Header";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Container from "../../Components/Container/Container";
import SearchVideoList from "../../Components/SearchVideoList/SearchVideoList";
import videos from "../../Json/videos.json";

export default function Search() {
  return (
    <>
      <Header />
      <Banner image='home'/>
      <Container>
        <section className={styles.search}>
          {/* <h3>Pesquisar:</h3> */}
          <SearchVideoList videos={videos} />
        </section>
      </Container>
      <Footer />
    </>
  );
}
