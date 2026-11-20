import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Collections from "./sections/Collections";
import CustomFrame from "./sections/CustomFrame";
import Gallery from "./sections/Gallery";
import WhyChooseUs from "./sections/WhyChooseUs";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Collections />
      <CustomFrame />
      <Gallery />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;