import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const ManageOrders = () => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);



  const fetchOrders = async () => {

    try {

      const token = localStorage.getItem("token");


      const res = await axios.get(

        "http://localhost:5000/api/orders/all-orders",

        {
          headers:{
            Authorization:`Bearer ${token}`,
          },
        }

      );


      setOrders(res.data.orders || []);


    } catch(error){

      console.log(
        "Order Fetch Error:",
        error.response?.data || error.message
      );

    } finally {

      setLoading(false);

    }

  };



  useEffect(()=>{

    fetchOrders();

  },[]);




  const updateStatus = async (id,status)=>{

    try{

      const token = localStorage.getItem("token");


      await axios.put(

        `http://localhost:5000/api/orders/update/${id}`,

        {
          status,
        },

        {
          headers:{
            Authorization:`Bearer ${token}`,
          },
        }

      );


      alert("Order Status Updated ✅");

      fetchOrders();


    }catch(error){

      console.log(
        "Update Error:",
        error.response?.data || error.message
      );

    }

  };




  if(loading){

    return (
      <h2 className="loading-text">
        Loading Orders...
      </h2>
    );

  }



  return (

    <>

      <Navbar />


      <div className="manage-orders-page">


        <h1>
          Manage Orders
        </h1>



        {
          orders.length === 0 ?

          (

            <div className="empty-orders">

              <h3>
                No Orders Found
              </h3>

            </div>

          )

          :

          (

            <div className="orders-container">


            {
              orders.map((order)=>(


                <div
                  className="order-card"
                  key={order._id}
                >


                  <h3>
                    Order ID:
                  </h3>

                  <p>
                    {order._id}
                  </p>



                  <div className="customer-info">

                    <h4>
                      Customer Details
                    </h4>


                    <p>
                      Name:
                      {" "}
                      {order.user?.name || "User"}
                    </p>


                    <p>
                      Email:
                      {" "}
                      {order.user?.email || "N/A"}
                    </p>


                  </div>




                  <div className="product-info">

                    <h4>
                      Products
                    </h4>


                    {
                      order.items?.map((item)=>(


                        <div
                          className="product-item"
                          key={item._id}
                        >

                          <span>
                            {item.product?.title || "Product"}
                          </span>


                          <span>
                            Qty: {item.quantity}
                          </span>


                        </div>


                      ))
                    }


                  </div>





                  <div className="order-details">


                    <p>
                      Total Amount:
                      {" "}
                      ${order.totalAmount}
                    </p>


                    <p>
                      Address:
                      {" "}
                      {order.shippingAddress?.address}
                    </p>


                    <p>
                      City:
                      {" "}
                      {order.shippingAddress?.city}
                    </p>


                  </div>





                  <div className="status-box">


                    <label>
                      Order Status
                    </label>


                    <select

                      value={order.status}

                      onChange={(e)=>
                        updateStatus(
                          order._id,
                          e.target.value
                        )
                      }

                    >

                      <option value="Pending">
                        Pending
                      </option>


                      <option value="Processing">
                        Processing
                      </option>


                      <option value="Shipped">
                        Shipped
                      </option>


                      <option value="Delivered">
                        Delivered
                      </option>


                      <option value="Cancelled">
                        Cancelled
                      </option>


                    </select>


                  </div>



                </div>


              ))
            }


            </div>

          )

        }


      </div>



      <Footer />

    </>

  );

};


export default ManageOrders;