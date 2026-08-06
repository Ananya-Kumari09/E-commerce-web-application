import ProductCard from "./ProductCard";

const ProductGrid = ({ products = [] }) => {

console.log(products[0]);

  return (
    <section className="product-section">
      <h2>Trending Collection</h2>

      <div className="products-grid">
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard
              key={product._id || product.id || index}
              product={product}
            />
          ))
        ) : (
          <div className="empty-state">
            😔 No products found
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;