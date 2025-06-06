
const About = () => {
  const features = [
    { 
      id: 1, 
      title: "Equipe Especializada", 
      description: "Nossa equipe de especialistas Apple ajudará você a escolher o dispositivo perfeito.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    { 
      id: 2, 
      title: "Garantia de Qualidade", 
      description: "Todos os nossos produtos são dispositivos Apple genuínos com cobertura total de garantia.", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ) 
    },
    { 
      id: 3, 
      title: "Suporte Técnico", 
      description: "Obtenha assistência na configuração, solução de problemas e manutenção do dispositivo.", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ) 
    },
  ];

  return (
    <section id="about" className="py-20 bg-apple-black text-white">
      <div className="container-custom">
        <h2 className="section-title text-center mb-16">Por Que Escolher a GlobalTech?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map(feature => (
            <div key={feature.id} className="text-center p-6 border border-gray-800 rounded-lg bg-gradient-to-b from-gray-900 to-black">
              <div className="text-apple-orange mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Seu Especialista Apple Local</h3>
              <p className="text-gray-400 mb-6">
                Desde xxxx, a GlobalTech tem sido o principal destino para produtos Apple na região.
                Orgulhamo-nos de oferecer um serviço excepcional ao cliente e conhecimento especializado
                em todos os dispositivos Apple.
              </p>
              <p className="text-gray-400 mb-6">
                Nossa equipe se mantém atualizada com as últimas inovações da Apple para oferecer orientação
                informada na escolha do seu próximo dispositivo. Seja para atualizar seu iPhone ou explorar
                o ecossistema Apple pela primeira vez, estamos aqui para ajudar.
              </p>
              <div className="flex space-x-4">
                <div className="text-4xl font-bold text-apple-orange">XX+</div>
                <div>
                  <div className="font-semibold">Anos de Experiência</div>
                  <div className="text-sm text-gray-400">Servindo nossa comunidade</div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=1364&auto=format" 
                alt="Interior da Loja Apple" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
