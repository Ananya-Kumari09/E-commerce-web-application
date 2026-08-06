import { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);


  const toggleWishlist = (product) => {

    setWishlist((prev) => {

      const exists = prev.find(
        (item) =>
          (item._id || item.id) ===
          (product._id || product.id)
      );


      if (exists) {

        return prev.filter(
          (item) =>
            (item._id || item.id) !==
            (product._id || product.id)
        );

      } else {

        return [...prev, product];

      }

    });

  };


  const isInWishlist = (id) => {

    return wishlist.some(
      (item) =>
        (item._id || item.id) === id
    );

  };


  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist
      }}
    >

      {children}

    </WishlistContext.Provider>
  );
};

export default WishlistProvider;