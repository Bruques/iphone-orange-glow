
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductCategories from "../components/ProductCategories";
import About from "../components/About";
import LocationMap from "../components/LocationMap";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductCategories />
      <About />
      <LocationMap />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
