import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { CartContext } from "../context/CartContext";

const Checkout = () => {

const navigate = useNavigate();

const { cartItems, setCartItems } = useContext(CartContext);


const handleSubmit = async (e) => {

e.preventDefault();


const user = JSON.parse(
  localStorage.getItem("user")
);

const token = localStorage.getItem("token");


if (!user || !user.loggedIn) {

  alert("Please login first 🔐");

  navigate("/login");

  return;

}


try {


await axios.post(

"http://localhost:5000/api/orders/place",

{

fullName: e.target[0].value,

email: e.target[1].value,

phone: e.target[2].value,

address: e.target[3].value,

city: e.target[4].value,

postalCode: e.target[5].value,


products: cartItems.map((item)=>(

{

product: item._id || item.id,

quantity: item.quantity || 1,

price: Number(
String(item.price).replace("$","")
),

}

)),


totalAmount: cartItems.reduce(

(total,item)=>

total +

Number(
String(item.price).replace("$","")
)

*

(item.quantity || 1),

0

),


},


{

headers:{

Authorization:`Bearer ${token}`,

},

}

);



alert("Order placed successfully 🚀");


// Clear Cart

setCartItems([]);

localStorage.removeItem("cart");


navigate("/");


}

catch(error){


alert(

error.response?.data?.message ||

"Order Failed"

);


}


};



return (

<>

<Navbar />


<div className="checkout-page">


<h1>Checkout</h1>


<form

className="checkout-form"

onSubmit={handleSubmit}

>


<input

type="text"

placeholder="Full Name"

required

/>


<input

type="email"

placeholder="Email Address"

required

/>


<input

type="text"

placeholder="Phone Number"

required

/>


<input

type="text"

placeholder="Shipping Address"

required

/>


<input

type="text"

placeholder="City"

required

/>


<input

type="text"

placeholder="Postal Code"

required

/>


<button type="submit">

Place Order

</button>


</form>


</div>


<Footer />

</>

);

};


export default Checkout;