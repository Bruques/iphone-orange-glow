
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <a href="#" className="font-bold text-xl">
              Global<span className="text-apple-orange">Tech</span>
            </a>
            <p className="mt-2 text-gray-400 text-sm">
              Sua loja local de produtos Apple premium
            </p>
          </div>
          
          <nav className="flex gap-6 flex-wrap justify-center">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">
              Início
            </a>
            <a href="#products" className="text-gray-400 hover:text-white transition-colors">
              Produtos
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">
              Sobre Nós
            </a>
            <a href="#location" className="text-gray-400 hover:text-white transition-colors">
              Localização
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Contato
            </a>
          </nav>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} GlobalTech. Todos os direitos reservados.</p>
          <p className="text-xs mt-2">
            Apple, iPhone, MacBook, iPad são marcas registradas da Apple Inc., registradas nos EUA e em outros países. 
            GlobalTech é uma revendedora independente e não é afiliada à Apple Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
