import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

const Products = () => {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const [searchParams] = useSearchParams();
  const gender = searchParams.get("gender");
  const tag = searchParams.get("tag");

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const response = await axios.get(
          "http://localhost:5000/api/products"
        );

        setProducts(response.data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchProducts();

  }, []);

  return (
    <>
      <Navbar />

      <div className="products-page-header">

        <h1>Explore Collection</h1>

        <p>
          Discover premium fashion crafted for modern lifestyle.
        </p>

        <input
          type="text"
          placeholder="Search products..."
          className="products-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="lowToHigh">
            Price Low → High
          </option>
          <option value="highToLow">
            Price High → Low
          </option>
        </select>

        <div className="category-buttons">

          <button onClick={() => setCategory("All")}>
            All
          </button>

          <button onClick={() => setCategory("Jackets")}>
            Jackets
          </button>

          <button onClick={() => setCategory("Shirts")}>
            Shirts
          </button>

          <button onClick={() => setCategory("Hoodies")}>
            Hoodies
          </button>

          <button onClick={() => setCategory("Coats")}>
            Coats
          </button>

        </div>

      </div>

      <ProductGrid
        products={products}
        search={search}
        category={category}
        gender={gender}
        tag={tag}
        sort={sort}
      />

      <Footer />

    </>
  );
};

export default Products;