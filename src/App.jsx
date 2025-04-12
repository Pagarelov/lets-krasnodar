import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Header from "./components/Header/Header.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import PopularDestinations from "./components/PopularDestinations/PopularDestinations.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import TourPlan from "./components/TourPlan/TourPlan.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />

                <ScrollToTop />

                <Routes>
                    <Route path="/" element={
                        <main>
                            <HeroSection id="home" />
                            <PopularDestinations />
                            <AboutUs id="about" />
                            <TourPlan id="tours"/>
                        </main>
                    } />

                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/tours" element={<TourPlan />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <Footer id="contacts" />
            </div>
        </Router>
    );
}

export default App;