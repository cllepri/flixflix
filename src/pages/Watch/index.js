import styles from "../Watch/Watch.module.css";
import Header from "../../Components/Header";
import Container from "../../Components/Container";
import Footer from "../../Components/Footer";

function Watch() {
  return (
    <>
      <Header />
      <Container>
      <h1>Outros Videos interessantes</h1>
        <section className={styles.watch}>
           {/* Podemos fazer um json com os dados dos videwos de deixar o app organizare a apresnetação */}
          <iframe
            width="350"
            height="280"
            src="https://www.youtube.com/embed/uLDdfvnsk30?si=q35odz8BKJvtVG9e"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe width="350" height="280" src="https://www.youtube.com/embed/HB-oqf4Jiv0?list=PLnex8IkmReXyNgtea8ly0Pn7Kk7Kavn9v" title="Curso de React JS Aula 09 Criar Page 404 Page Not Found e Ajustes no CSS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Watch;
