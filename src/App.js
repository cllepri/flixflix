import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Container from "./Components/Container";
import Card from "./Components/Card";
import videos from "./Json/videos.json"
import Category from "./Components/Category";

const categories = [

"Geografia",
"Como fazer e usar",
"Astronomia e Geografia",
"Climatologia, Meteorologia, Vegetação",
"Geologia e Hidroigrafia"
]

function filterCategory(id){
  return videos.filter(video => video.category===categories[id] )}


function App() {
  return (
    <>
      <Header/>
      <Banner image= "home" />
      <Container>
          
           <Category category={categories[0]}> 
          {filterCategory(0).map((video)=> <Card url={video.url} cover={video.cover} key={video.id}/>)}
           </Category>
           
           <Category category={categories[1]}> 
          {filterCategory(1).map((video)=> <Card url={video.url} cover={video.cover} key={video.id}/>)}
           </Category>

           <Category category={categories[2]}>

          {filterCategory(2).map((video)=> <Card url={video.url} cover={video.cover} key={video.id}/>)}
           </Category>

           <Category category={categories[3]}> 
          {filterCategory(3).map((video)=> <Card url={video.url} cover={video.cover} key={video.id}/>)}
           </Category>

           <Category category={categories[4]}>

          {filterCategory(4).map((video)=> <Card url={video.url} cover={video.cover} key={video.id}/>)}
           </Category>

      </Container> 
      <Footer/>
    </>
  );
}

export default App;





