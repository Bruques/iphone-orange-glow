
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <a href="#" className="font-bold text-xl">
              Apple<span className="text-apple-orange">Edge</span>
            </a>
            <p className="mt-2 text-gray-400 text-sm">
              Your local premium Apple products store
            </p>
          </div>
          
          <nav className="flex gap-6 flex-wrap justify-center">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">
              Home
            </a>
            <a href="#products" className="text-gray-400 hover:text-white transition-colors">
              Products
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">
              About Us
            </a>
            <a href="#location" className="text-gray-400 hover:text-white transition-colors">
              Location
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} AppleEdge. All rights reserved.</p>
          <p className="text-xs mt-2">
            Apple, iPhone, MacBook, iPad are trademarks of Apple Inc., registered in the U.S. and other countries. 
            AppleEdge is an independent retailer and not affiliated with Apple Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
