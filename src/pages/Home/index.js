import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import Container from "../../Components/Container";
import Card from "../../Components/Card";
import Category, { categories, filterCategory } from "../../Components/Category";

function Home() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Container>
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
