import { useParams } from "react-router-dom";

import { useContext } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import products from "../data/products";

import { CartContext } from "../context/CartContext";

const ProductDetails = () => {

  const { id } = useParams();

  const product =
    products.find((item) =>
      item.id === Number(id)
    );

  const { addToCart } =
    useContext(CartContext);

  return (
    <>

      <Navbar />

      <div className="details-page">

        <div className="details-image">

          <img
            src={product.image}
            alt=""
          />

        </div>

        <div className="details-content">

          <h1>
            {product.title}
          </h1>

          <h2>
            {product.price}
          </h2>

          <p>
            Premium quality fashion piece crafted
            with modern aesthetics and timeless
            elegance. Designed for comfort,
            confidence, and luxury styling.
          </p>

          <button
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>

        </div>

      </div>

      <Footer />

    </>
  );
};

export default ProductDetails;