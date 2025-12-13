import React from 'react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Kashmiri Red Chilli",
      description: "Vibrant color, mild heat.",
      price: "$8.50",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/2b9648f20c-057c3ad88b77a4d2673f.png",
      alt: "Premium packaging of Kashmiri Red Chilli powder, elegant label, against a clean, minimalist background, product photography."
    },
    {
      id: 2,
      name: "Lakadong Turmeric",
      description: "High curcumin, potent aroma.",
      price: "$12.00",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/7b72ef3094-7c2183b54eb494582377.png",
      alt: "A jar of Lakadong Turmeric powder, rich golden-yellow color, with a handcrafted wooden spoon, premium product photography."
    },
    {
      id: 3,
      name: "Malabar Peppercorns",
      description: "Bold, pungent, and aromatic.",
      price: "$9.75",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/8737bbc50f-068c2bdc9a73571d7215.png",
      alt: "Glass container of whole Malabar Black Peppercorns, minimalist label design, natural light, product photography."
    },
    {
      id: 4,
      name: "Garam Masala",
      description: "Our signature 12-spice blend.",
      price: "$15.20",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/7cccc9b9e1-076917427f82e9e7ab11.png",
      alt: "An elegant bottle of Garam Masala blend, showcasing the texture of the ground spices inside, premium product shot."
    }
  ];

  return (
    <section id="featured-section" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-brand-brown-900">Explore Our Collection</h2>
          <p className="mt-4 text-brand-brown-700 max-w-2xl mx-auto">
            From fiery whole chillies to fragrant ground masalas, discover the perfect ingredient for your next culinary creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              id={`product-card-${product.id}`}
              className="group bg-white rounded-lg shadow-sm overflow-hidden border border-brand-brown-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={product.image}
                  alt={product.alt}
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl font-bold text-brand-brown-900">{product.name}</h3>
                <p className="text-brand-brown-500 mt-2">{product.description}</p>
                <p className="text-lg font-bold text-brand-green-700 mt-4">{product.price}</p>
                <button className="mt-4 w-full bg-brand-brown-700 text-white py-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;