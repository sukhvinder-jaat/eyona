import logo from "./logo.svg";
import "./App.css";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Join } from "./components/Join";
import { Magic } from "./components/Magic";
import { MyNav } from "./components/MyNav";
import { Passion } from "./components/Passion";
import Preloader from "./components/Preloader";
import { BackTop } from "./components/BackTop";
import { Talk } from "./components/Talk";
import { Trust } from "./components/Trust";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Experts } from "./components/Experts";
import { Hero } from "./components/Hero";
import Our from "./components/Our";
import Team from "./components/Team";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
    once: true,
  });
  return (
    <div className="App overflow-hidden">
      <Preloader />
      <BackTop />
      {/* <MyNav /> */}
      <Hero />
      <Passion />
      <Experts />
      <Our />
      <Trust />
      <Talk />
      <Magic />
      <Team />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
