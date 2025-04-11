import './App.css'
import Header from "./components/Header/Header.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import PopularDestinations from "./components/PopularDestinations/PopularDestinations.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {
  return (
      <div className="App">
        <Header />
        <main>
          <HeroSection />
          <PopularDestinations />
        </main>
        <Footer />
      </div>
  );
}

export default App
