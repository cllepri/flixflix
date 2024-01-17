import styles from "../Watch/Watch.module.css";
import Header from "../../Components/Header";
import Container from "../../Components/Container";
import Footer from "../../Components/Footer";

function Watch() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.watch}>
          <h1>Assistir</h1>
          <iframe
            width="854"
            height="480"
            src="https://www.youtube.com/embed/uLDdfvnsk30?si=q35odz8BKJvtVG9e"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Watch;
