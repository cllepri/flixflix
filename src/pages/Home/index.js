import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import Container from "../../Components/Container";
import Card from "../../Components/Card";
import Category, { categories, filterCategory } from "../../Components/Category";
import { useState } from "react";

function Home() {

    const [nome, setNome] = useState('Busca por títulos')
    function pegarNome(event) {
      setNome(event.target.value);
    }

  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>
        <input
          type='text'
          placeholder="Nome"
          onChange={pegarNome}
        />
        <h3>{nome}</h3>
        {categories.map((category, index) => (
          <Category category={category}>
            {filterCategory(index).map((video) => (
              <Card id={video.id} key={video.id} />
            ))}
          </Category>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
