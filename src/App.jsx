
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Login from "./components/Login";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Portfolio/>
      <About/>
      <Footer/>
    </>
  )
}