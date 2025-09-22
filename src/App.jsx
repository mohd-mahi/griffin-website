import React, { useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lenis from "lenis";
import Aos from "aos";
import Header from "./layouts/Header/Header";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Footer from "./layouts/Footer/Footer";
import Atlantiis from "./pages/Atlantiis/Atlantiis";
import OtherProject from "./pages/OtherProject/OtherProject";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/atlantiis" element={<Atlantiis />}></Route>
      <Route path="/about-us" element={<AboutUs />}></Route>
      <Route path="/other-projects" element={<OtherProject />}></Route>
    </Routes>
  );
}

const App = () => {
  const lenisRef = useRef();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-out-cubic",
      offset: 100,
    });
    Aos.refresh();
  }, []);

  useEffect(() => {
    function easeInOutQuint(x) {
      return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
    }

    const lenis = new Lenis({
      autoRaf: false,
      duration: 1,
      easing: easeInOutQuint(),
    });

    window.lenis = lenis;
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      Aos.refresh();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
