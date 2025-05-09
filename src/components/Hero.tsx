
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen bg-apple-black relative flex items-center pt-16"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,1)), url('https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=1920&auto=format')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div className="text-white space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Encontre o <span className="text-apple-orange">iPhone</span> dos seus sonhos aqui!
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-lg">
            Produtos Apple premium com serviço especializado e preços competitivos, entregues com segurança e rapidez diretamente em sua casa.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#products" className="btn-primary">
              Explorar Produtos
            </a>
            <a href="#contact" className="btn-outline">
              Fale Conosco
            </a>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[500px] animate-float">
            <img 
              src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1287&auto=format" 
              alt="iPhone 15 Pro" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-apple-black/80 -bottom-1"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse-subtle">
        <a href="#products" className="text-white flex flex-col items-center">
          <span className="text-sm mb-2">Rolar para descobrir</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
