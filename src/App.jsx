import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/about";
import Menu from "./pages/Menu";
import Location from "./pages/Location";
import Promo from "./pages/Promo";
import Faq from "./pages/Faq";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/location" element={<Location />} />
            <Route path="/promo" element={<Promo />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;