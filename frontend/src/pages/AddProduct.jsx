import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
    gender: "",
    tag: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      // 🔥 IMPORTANT FIX (price number banaya)
      const finalData = {
        ...form,
        price: Number(form.price),
      };

      await axios.post("https://e-commerce-web-application-guzr.onrender.com/api/products", finalData);

      alert("Product Added 🚀");
      window.location.reload();

      // form reset
      setForm({
        title: "",
        price: "",
        image: "",
        category: "",
        gender: "",
        tag: "",
      });

    }  catch (error) {
  console.log("Full Error:", error);
  console.log("Response:", error.response);
  console.log("Data:", error.response?.data);

  alert(error.response?.data?.message || "Something went wrong");
}
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Add New Product</h1>

        <input name="title" placeholder="Product Title" style={styles.input} onChange={handleChange} />
        <input name="price" placeholder="Price (number only)" style={styles.input} onChange={handleChange} />
        <input name="image" placeholder="Image URL" style={styles.input} onChange={handleChange} />
        <input name="category" placeholder="Category" style={styles.input} onChange={handleChange} />
        <input name="gender" placeholder="Gender" style={styles.input} onChange={handleChange} />
        <input name="tag" placeholder="Tag (New/Sale)" style={styles.input} onChange={handleChange} />

        <button style={styles.button} onClick={handleSubmit}>
          Add Product
        </button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f4f4",
  },
  card: {
    width: "400px",
    padding: "25px",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  title: {
    textAlign: "center",
    marginBottom: "10px",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    padding: "10px",
    background: "black",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default AddProduct;