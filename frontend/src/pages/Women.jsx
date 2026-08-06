import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

const Women = () => {
  return (
    <>
      <Navbar />

      <div className="products-page-header">
        <h1>Women Collection</h1>

        <p>
          Explore premium women's fashion.
        </p>
      </div>

      <ProductGrid />

      <Footer />
    </>
  );
};

export default Women;