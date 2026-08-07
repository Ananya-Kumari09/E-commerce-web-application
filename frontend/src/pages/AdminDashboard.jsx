import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {

  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    fetchDashboardData();
  }, []);


  const fetchDashboardData = async () => {

    try {

      const token = localStorage.getItem("token");

      console.log("TOKEN:", token);

      console.log(
        "USER:",
        JSON.parse(localStorage.getItem("user"))
      );


      const productsRes = await axios.get(
        "https://e-commerce-web-application-guzr.onrender.com/api/products"
      );

      setTotalProducts(productsRes.data.length);



      const usersRes = await axios.get(
        "https://e-commerce-web-application-guzr.onrender.com/api/auth/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTotalUsers(usersRes.data.length);



      const ordersRes = await axios.get(
        "https://e-commerce-web-application-guzr.onrender.com/api/orders/all-orders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTotalOrders(ordersRes.data.orders.length);



    } catch (error) {

      console.log(error);

    }

  };


  return (
    <div className="admin-dashboard-page">


      <div className="admin-dashboard-header">

        <h1 className="admin-dashboard-title">
          Admin Dashboard
        </h1>

        <p className="admin-dashboard-subtitle">
          Welcome Admin 👋 Manage your E-Commerce Store
        </p>

      </div>



      <div className="admin-dashboard-grid">


        <div className="admin-dashboard-card">

          <h3>Total Products</h3>

          <h2>{totalProducts}</h2>

          <p>Available Products</p>

        </div>



        <div className="admin-dashboard-card">

          <h3>Total Orders</h3>

          <h2>{totalOrders}</h2>

          <p>Orders Received</p>

        </div>



        <div className="admin-dashboard-card">

          <h3>Total Users</h3>

          <h2>{totalUsers}</h2>

          <p>Registered Users</p>

        </div>


      </div>



      <div className="admin-dashboard-actions">


        <Link
          to="/admin/add-product"
          className="admin-dashboard-button"
        >
          Add Product
        </Link>



        <Link
          to="/admin/manage-products"
          className="admin-dashboard-button"
        >
          Manage Products
        </Link>



        <Link
          to="/manage-orders"
          className="admin-dashboard-button"
        >
          Manage Orders
        </Link>


      </div>


    </div>
  );
};

export default AdminDashboard;