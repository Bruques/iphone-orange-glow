
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="text-white font-bold text-xl lg:text-2xl">
          Global<span className="text-apple-orange">Tech</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a
            href="#home"
            className="text-white hover:text-apple-orange transition-colors"
          >
            Início
          </a>
          <a
            href="#products"
            className="text-white hover:text-apple-orange transition-colors"
          >
            Produtos
          </a>
          <a
            href="#about"
            className="text-white hover:text-apple-orange transition-colors"
          >
            Sobre Nós
          </a>
          <a
            href="#location"
            className="text-white hover:text-apple-orange transition-colors"
          >
            Localização
          </a>
          <a
            href="#contact"
            className="btn-primary"
          >
            Contato
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md py-4 shadow-md animate-fade-in">
          <nav className="container-custom flex flex-col space-y-3">
            <a
              href="#home"
              className="text-white hover:text-apple-orange transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              Início
            </a>
            <a
              href="#products"
              className="text-white hover:text-apple-orange transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              Produtos
            </a>
            <a
              href="#about"
              className="text-white hover:text-apple-orange transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              Sobre Nós
            </a>
            <a
              href="#location"
              className="text-white hover:text-apple-orange transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              Localização
            </a>
            <a
              href="#contact"
              className="text-apple-orange font-medium px-4 py-2"
              onClick={toggleMenu}
            >
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
