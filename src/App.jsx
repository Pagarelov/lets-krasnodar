import './App.css'
import Header from "./components/Header/Header.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import PopularDestinations from "./components/PopularDestinations/PopularDestinations.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";

// Карта
// Отдых
// 404

function App() {
  return (
      <div className="App">
        <Header />
        <main >
          <HeroSection id="home" />
          <PopularDestinations />
          <AboutUs id="about" />
        </main>
        <Footer id="contacts" />
      </div>
  );
}

export default App
