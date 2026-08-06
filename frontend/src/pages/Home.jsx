import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);


  return (
    <>
      <Navbar />

      <Hero />

      <ProductGrid products={products} />

      <Footer />
    </>
  );
};

export default Home;