
const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      name: "iPhones",
      description: "Latest models with cutting-edge features",
      image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1530&auto=format",
    },
    {
      id: 2,
      name: "MacBooks",
      description: "Powerful laptops for work and creativity",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1626&auto=format",
    },
    {
      id: 3,
      name: "iPads",
      description: "Versatile tablets for every need",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1469&auto=format",
    },
    {
      id: 4,
      name: "Accessories",
      description: "Essential add-ons for your Apple devices",
      image: "https://images.unsplash.com/photo-1600186279566-c778832f6242?q=80&w=1470&auto=format",
    },
  ];

  return (
    <section id="products" className="py-20 bg-apple-lightgray">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">Our Product Range</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <a 
                  href="#contact" 
                  className="text-apple-orange font-semibold flex items-center"
                >
                  Learn more
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-1" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary">
            Ask About Current Inventory
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
