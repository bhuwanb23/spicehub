import { useCart } from '../context/CartContext';

const ComplementaryProducts = ({ products }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <section id="complementary-products-section" className="container mx-auto px-6 pt-12 pb-20">
      <div className="border-t border-brand-brown-300 pt-12">
        <h3 className="text-2xl font-bold text-brand-brown-900 mb-6">Pairs well with...</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              id={`spice-card-${product.id}`}
              className="bg-white p-4 rounded-lg border border-brand-brown-300 text-center transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  src={product.image} 
                  alt={product.alt} 
                />
              </div>
              <h4 className="font-semibold text-brand-brown-900">{product.name}</h4>
              <p className="text-brand-brown-700 mb-3">${product.price.toFixed(2)}</p>
              <button
                className="w-full bg-brand-brown-100 text-brand-brown-900 font-semibold py-2 px-3 rounded-md text-sm hover:bg-brand-brown-300 transition-colors"
                onClick={() => handleAddToCart(product)}
              >
                Add
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplementaryProducts;