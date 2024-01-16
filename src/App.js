import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Container from "./Components/Container";
import Card from "./Components/Card";
import videos from "./Json/db.json"
function App() {
  return (
    <>
      <Header/>
      <Banner image= "home" />
      <Container>
          <h2>Geografia</h2>
            <section className="cards">
            {videos.map(video=>{
            return(
              <Card url={video.url} cover={video.cover} key={video.id}/>
            )})}
            
           
            </section>
          
      </Container> 
      <Footer/>
    </>
  );
}

export default App;





