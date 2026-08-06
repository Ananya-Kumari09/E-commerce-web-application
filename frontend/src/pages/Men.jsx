import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

const Men = () => {
  return (
    <>
      <Navbar />

      <div className="products-page-header">

        <h1>Men Collection</h1>

        <p>
          Explore premium men's fashion.
        </p>

      </div>

      <ProductGrid />

      <Footer />

    </>
  );
};

export default Men;