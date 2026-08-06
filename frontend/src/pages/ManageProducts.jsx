import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ManageProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(res.data);

    } catch (error) {

      console.log(error);

      alert("Products load nahi huye.");

    }

  };

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this product?"
    );

    if (!confirmDelete) return;

    try {

      await axios.delete(
        `http://localhost:5000/api/products/${id}`
      );

      alert("Product Deleted");

      fetchProducts();

    } catch (error) {

      console.log(error);

      alert("Delete Failed");

    }

  };

  return (

    <div className="manage-products-page">

      <h1 className="manage-products-title">
        Manage Products
      </h1>

      <div className="manage-products-grid">

        {
          products.map((product) => (

            <div
              className="manage-product-card"
              key={product._id}
            >

              <img
                src={product.image}
                alt={product.title}
              />

              <h3>{product.title}</h3>

              <p>₹ {product.price}</p>

              <div className="manage-product-buttons">

  <Link to={`/admin/edit-product/${product._id}`}>
    <button className="edit-product-btn">
      Edit
    </button>
  </Link>

  <button
    className="delete-product-btn"
    onClick={() => handleDelete(product._id)}
  >
    Delete
  </button>

</div>
            </div>

          ))
        }

      </div>

    </div>

  );

};

export default ManageProducts;