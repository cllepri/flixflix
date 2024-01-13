import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Container from "./Components/Container";


function App() {
  return (
    <>
      <Header/>
      <Banner image= "home" />
      <Container>
          <h2>Geografia</h2>
          <p>Lista de Cards videos</p>
      </Container> 
      <Footer/>
    </>
  );
}

export default App;





