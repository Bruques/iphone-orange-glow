
import { MapPin, Phone } from "lucide-react";

const LocationMap = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center mb-16">Find Our Store</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">AppleEdge Store Location</h3>
            <p className="text-gray-600">
              Visit our store to experience our products firsthand and get personalized assistance from our expert staff.
            </p>
            
            <div className="flex items-start space-x-3">
              <MapPin className="text-apple-orange mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <address className="text-gray-600 not-italic">
                  123 Tech Boulevard<br />
                  Innovation District<br />
                  Cityville, CV 12345
                </address>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Phone className="text-apple-orange mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-gray-600">
                  (555) 123-4567
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Hours</h4>
              <div className="grid grid-cols-2 gap-2 text-gray-600">
                <div>Monday - Friday</div>
                <div>10:00 AM - 8:00 PM</div>
                <div>Saturday</div>
                <div>11:00 AM - 6:00 PM</div>
                <div>Sunday</div>
                <div>12:00 PM - 5:00 PM</div>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              title="Store Location"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1596292121348!5m2!1sen!2s"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
