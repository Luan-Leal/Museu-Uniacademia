import "./home.scss";

import Header from "../../components/header/header";
import CarouselApp from "../../components/header/carousel/carousel";
import icone from "../../assets/icone.png";
const Home = () => {



  
  return (
    <div className="homePage">
      <section>
        <Header />
        <div className="image">
          <div>
            <h1>Museu Universitário <span>Academia</span> </h1>
            <img draggable="false" src={icone} alt="icone"></img>
            

          </div>
          <h1 className="title">Museu de Etnologia Indígena e História Natural  </h1> 
     
        </div>
        <main>
          <div>
            <div className="container">
            <h1>Algumas de nossas Exposições</h1>

            <CarouselApp/>
            </div>

          </div>
         
        </main>
        {/* <CarouselApp/> */}
      </section>
    </div>
  );
};
export default Home;
