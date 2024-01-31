import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/index";
import Banner from "../../Components/Banner/Banner";
import Container from "../../Components/Container/Container";
import Carousel from '../../Components/carousel/Carousel';
import Card from "../../Components/Card/Card";
import Category, {
  categories,
  filterCategory,
} from "../../Components/Category/Category";
import { useState } from "react";


function Home() {
  const [nome, setNome] = useState("Busca por títulos");
  function pegarNome(event) {
    setNome(event.target.value);
  }

  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>
        {categories.map((category, index) => (
          <Category category={category}>
            <Carousel>
              {filterCategory(index).map((video) => (
                <Card id={video.id} key={video.id} />
              ))}
            </Carousel>
          </Category>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default Home;

{
  /* <input type="text" placeholder="Nome" onChange={pegarNome} />
        <h3>{nome}</h3> */
}
