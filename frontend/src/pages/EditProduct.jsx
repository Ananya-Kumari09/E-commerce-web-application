import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
    gender: "",
    tag: "",
  });

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {

    try {

      const res = await axios.get(
        `https://e-commerce-web-application-guzr.onrender.com/api/cart/remove/${id}`
      );

      setForm(res.data);

    } catch (error) {

      console.log(error);

      alert("Product load nahi hua");

    }

  };

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleUpdate = async (e) => {

    e.preventDefault();

    try {

      await axios.put(
        `https://e-commerce-web-application-guzr.onrender.com/api/cart/remove/${id}`,
        {
          ...form,
          price: Number(form.price),
        }
      );

      alert("Product Updated Successfully");

      navigate("/admin/manage-products");

    } catch (error) {

      console.log(error);

      alert("Update Failed");

    }

  };

  return (

    <div className="edit-product-page">

      <div className="edit-product-box">

        <h1>Edit Product</h1>

        <form onSubmit={handleUpdate}>

          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={form.image}
            onChange={handleChange}
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
          />

          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={form.gender}
            onChange={handleChange}
          />

          <input
            type="text"
            name="tag"
            placeholder="Tag"
            value={form.tag}
            onChange={handleChange}
          />

          <button type="submit">
            Update Product
          </button>

        </form>

      </div>

    </div>

  );

};

export default EditProduct;