import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import { Heart } from "lucide-react";

const ProductCard = ({ product }) => {

  const { addToCart } = useContext(CartContext);
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);

  const productId = product._id || product.id;

  const liked = isInWishlist(productId);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    console.log("CARD PRODUCT:", product);

    // MongoDB product check
    if (!product._id) {
      console.log("Warning: Product does not have MongoDB _id");
    }

    addToCart(product);
  };


  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    toggleWishlist(product);
  };


  return (
    <Link
      to={`/product/${productId}`}
      className="product-card"
    >

      <div className="card-wrapper">

        <div
          className="wishlist-icon"
          onClick={handleWishlist}
        >

          <Heart
            size={18}
            color={liked ? "red" : "black"}
            fill={liked ? "red" : "none"}
          />

        </div>


        <img
          src={product.image}
          alt={product.title}
        />

      </div>


      <div className="product-info">

        <h3>
          {product.title}
        </h3>


        <p>
          {product.price}
        </p>


        <button
          className="cart-btn"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>


      </div>


    </Link>
  );
};


export default ProductCard;