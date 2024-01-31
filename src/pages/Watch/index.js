import styles from "../Watch/Watch.module.css";
import Header from "../../Components/Header";
import Container from "../../Components/Container/Container.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import { useParams } from "react-router-dom";
import videos from '../../Json/videos.json';


function Watch() {
    const params = useParams()
    const video = videos.find((video)=> {return video.id === params.id})
  return (
    <>
      <Header />
      <Container>
      <h1>Outros Videos interessantes</h1>
        <section className={styles.watch}>
           
          <iframe
            width="580"
            height="420"
            src={`https://www.youtube.com/embed/${video.id}`}
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
