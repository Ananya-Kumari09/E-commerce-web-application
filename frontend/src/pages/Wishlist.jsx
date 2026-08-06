import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { Link } from "react-router-dom";

const Wishlist = () => {

  const { wishlist, removeFromWishlist } =
    useContext(WishlistContext);

  return (
    <div className="wishlist-page">

      <h1>My Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <div className="wishlist-grid">

          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-card">

              <img src={item.image} alt={item.title} />

              <h3>{item.title}</h3>

              <p>{item.price}</p>

              <button
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove
              </button>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default Wishlist;