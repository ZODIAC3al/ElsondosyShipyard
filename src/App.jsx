import { CarouselComponent } from "./components/CarouselComponent";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="mb-8">
        <Navbar />
        <Hero />
      </div>
      <Routes>
        {/* Define routes for individual components */}
        <Route path="/" element={<Home />} />
        <Route path="/previouswork" element={<CarouselComponent />} />
        <Route path="/products" element={<Main />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </Router>
  );
}

function Home() {
  // Render all components that should appear initially
  return (
    <>
      <CarouselComponent />
      <Main />
      <Footer />
    </>
  );
}

export default App;
