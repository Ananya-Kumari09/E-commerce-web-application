import { Link } from "react-router-dom";

const AdminDashboard = () => {
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

          <h2>20</h2>

          <p>Available Products</p>

        </div>

        <div className="admin-dashboard-card">

          <h3>Total Orders</h3>

          <h2>0</h2>

          <p>Orders Received</p>

        </div>

        <div className="admin-dashboard-card">

          <h3>Total Users</h3>

          <h2>0</h2>

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

        <Link to="/manage-orders">
   Manage Orders
</Link>

      </div>

    </div>
  );
};

export default AdminDashboard;