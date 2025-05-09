
import { WhatsApp } from "lucide-react";

const ContactSection = () => {
  return (
    <section 
      id="contact" 
      className="py-20 bg-apple-orange text-white"
    >
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch with Us</h2>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Have a question about our products or services? Reach out to us directly through WhatsApp for a quick response.
        </p>
        
        <div className="flex justify-center">
          <a 
            href="https://wa.me/15551234567" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-apple-orange flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <WhatsApp size={24} />
            Contact via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
