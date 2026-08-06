import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

const Sale = () => {
  return (
    <>
      <Navbar />

      <div className="products-page-header">

        <h1>🔥 Mega Sale</h1>

        <p>
          Up to 50% OFF on selected fashion items.
          Limited Time Offer!
        </p>

      </div>

      <div
        style={{
          background: "#111",
          color: "white",
          padding: "20px",
          textAlign: "center",
          margin: "20px",
          borderRadius: "10px"
        }}
      >
        <h2>FLASH SALE</h2>
        <p>Buy 2 Get 1 Free • Free Shipping Above ₹999</p>
      </div>

      <ProductGrid />

      <Footer />
    </>
  );
};

export default Sale;