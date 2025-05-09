
import { MapPin, Phone } from "lucide-react";

const LocationMap = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center mb-16">Encontre Nossa Loja</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Localização da Loja GlobalTech</h3>
            <p className="text-gray-600">
              Visite nossa loja para experimentar nossos produtos em primeira mão e obter assistência personalizada de nossa equipe especializada.
            </p>
            
            <div className="flex items-start space-x-3">
              <MapPin className="text-apple-orange mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Endereço</h4>
                <address className="text-gray-600 not-italic">
                  123 Avenida Tecnologia<br />
                  Distrito de Inovação<br />
                  Cidade Tech, CT 12345
                </address>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Phone className="text-apple-orange mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Telefone</h4>
                <p className="text-gray-600">
                  (11) 5555-1234
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Horário</h4>
              <div className="grid grid-cols-2 gap-2 text-gray-600">
                <div>Segunda - Sexta</div>
                <div>10:00 - 20:00</div>
                <div>Sábado</div>
                <div>11:00 - 18:00</div>
                <div>Domingo</div>
                <div>12:00 - 17:00</div>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              title="Localização da Loja"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14614.14777272681!2d-46.1482009!3d-22.4710507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c88ee0f2e6f351%3A0x30e9c6c2ff4e66d3!2sBom%20Repouso%2C%20MG%2C%2037600-000!5e0!3m2!1spt-BR!2sbr!4v1715200582945!5m2!1spt-BR!2sbr"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
