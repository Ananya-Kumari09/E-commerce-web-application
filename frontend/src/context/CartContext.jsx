import toast from "react-hot-toast";
import { createContext, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = async (product) => {

    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please Login First");
      return;
    }

    try {

      console.log("Complete Product:", product);
console.log("Product ID:", product._id || product.id);

      await axios.post(

        "http://localhost:5000/api/cart/add",

        {
          productId: product._id || product.id,
          quantity: 1,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }

      );

      toast.success("Added To Cart");

      setCartItems((prev) => {

        const existingItem =
          prev.find(
            (item) =>
              (item._id || item.id) ===
              (product._id || product.id)
          );

        if (existingItem) {

          return prev.map((item) =>

            (item._id || item.id) ===
            (product._id || product.id)

              ? {
                  ...item,
                  quantity:
                    (item.quantity || 1) + 1
                }

              : item

          );

        }

        return [

          ...prev,

          {
            ...product,
            quantity: 1
          }

        ];

      });

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed To Add Cart"
      );

    }

  };

  return (

    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart
      }}
    >

      {children}

    </CartContext.Provider>

  );
};

export default CartProvider;