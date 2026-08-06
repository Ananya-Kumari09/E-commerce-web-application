import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { CartContext } from "../context/CartContext";

const Cart = () => {

const navigate = useNavigate();

const {
cartItems,
setCartItems
} = useContext(CartContext);

const token = localStorage.getItem("token");

useEffect(() => {

const fetchCart = async () => {

if (!token) return;

try {

const res = await axios.get(
"https://e-commerce-web-application-guzr.onrender.com/api/cart",
{
headers:{
Authorization:`Bearer ${token}`,
},
}
);

if(res.data.cart){

const items = res.data.cart.items.map((item)=>({

id:item.product._id,
title:item.product.title,
image:item.product.image,
price:item.product.price,
quantity:item.quantity,

}));

setCartItems(items);

}

}catch(error){
console.log(error);
}

};

fetchCart();

},[]);

const handleCheckout = () => {

const user = JSON.parse(
localStorage.getItem("user")
);

if (!user || !user.loggedIn) {

alert("Please Login or Register First 🔐");

navigate("/login");

return;
}

navigate("/checkout");

};

const increaseQuantity = async(id)=>{

const item=cartItems.find(
(cart)=>cart.id===id
);

if(!item) return;

try{

await axios.put(

"https://e-commerce-web-application-guzr.onrender.com/api/cart/update",

{
productId:id,
quantity:item.quantity+1,
},

{
headers:{
Authorization:`Bearer ${token}`,
},
}

);

setCartItems(

cartItems.map((cart)=>

cart.id===id

?{
...cart,
quantity:cart.quantity+1,
}

:cart

)

);

}catch(error){

console.log(error);

}

};

const decreaseQuantity = async(id)=>{

const item=cartItems.find(
(cart)=>cart.id===id
);

if(!item) return;

if(item.quantity===1){

try{

await axios.delete(

`https://e-commerce-web-application-guzr.onrender.com/api/cart/remove/${id}`,

{
headers:{
Authorization:`Bearer ${token}`,
},
}

);

setCartItems(

cartItems.filter(
(cart)=>cart.id!==id
)

);

}catch(error){

console.log(error);

}

return;

}

try{

await axios.put(

"http://localhost:5000/api/cart/update",

{
productId:id,
quantity:item.quantity-1,
},

{
headers:{
Authorization:`Bearer ${token}`,
},
}

);

setCartItems(

cartItems.map((cart)=>

cart.id===id

?{
...cart,
quantity:cart.quantity-1,
}

:cart

)

);

}catch(error){

console.log(error);

}

};
const totalPrice = cartItems.reduce(

(total, item) =>

  total +
  Number(
    String(item.price).replace("$", "")
  ) *
  (item.quantity || 1),

0

);

return (

<>

  <Navbar />

  <div className="cart-page">

    <h1>
      Shopping Cart
    </h1>

    {
      cartItems.length === 0 ? (

        <h2 className="empty-cart">
          Your cart is empty.
        </h2>

      ) : (

        <div className="cart-items">

          {
            cartItems.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt=""
                />

                <div className="cart-details">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.price}
                  </p>

                  <div className="quantity-box">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      -
                    </button>

                    <span>
                      {item.quantity || 1}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                </div>

              </div>

            ))
          }

          <div className="cart-total">

            <h2>
              Total: ${totalPrice}
            </h2>

            <button
              onClick={handleCheckout}
            >
              Proceed To Checkout
            </button>

          </div>

        </div>

      )
    }

  </div>

  <Footer />

</>

);

};

export default Cart;
