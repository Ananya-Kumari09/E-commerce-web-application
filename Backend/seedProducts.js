require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("./models/Product");


const products = [

  {
    title: "Luxury Black Jacket",
    price: 120,
    category: "Jackets",
    gender: "Men",
    tag: "Sale",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600",
  },

  {
    title: "Premium White Shirt",
    price: 90,
    category: "Shirts",
    gender: "Men",
    tag: "New",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600",
  },

  {
    title: "Oversized Beige Hoodie",
    price: 140,
    category: "Hoodies",
    gender: "Men",
    tag: "Sale",
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=600",
  },

  {
    title: "Classic Winter Coat",
    price: 180,
    category: "Coats",
    gender: "Men",
    tag: "New",
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=600",
  },

  {
    title: "Minimal Gray Hoodie",
    price: 110,
    category: "Hoodies",
    gender: "Men",
    tag: "Sale",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600",
  },

  {
    title: "Elegant Brown Jacket",
    price: 160,
    category: "Jackets",
    gender: "Men",
    tag: "New",
    image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600",
  },

  {
    title: "Streetwear Black Hoodie",
    price: 130,
    category: "Hoodies",
    gender: "Men",
    tag: "Sale",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600",
  },

  {
    title: "Modern Blue Shirt",
    price: 85,
    category: "Shirts",
    gender: "Men",
    tag: "New",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600",
  },

  {
    title: "Premium Leather Jacket",
    price: 220,
    category: "Jackets",
    gender: "Men",
    tag: "Sale",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600",
  },

  {
    title: "Soft Wool Coat",
    price: 190,
    category: "Coats",
    gender: "Men",
    tag: "New",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600",
  },


  {
    title: "Classic Office Shirt",
    price: 95,
    category: "Shirts",
    gender: "Women",
    tag: "Sale",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
  },

  {
    title: "Urban Street Hoodie",
    price: 125,
    category: "Hoodies",
    gender: "Women",
    tag: "New",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600",
  },

  {
    title: "Slim Fit Jacket",
    price: 175,
    category: "Jackets",
    gender: "Women",
    tag: "Sale",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
  },

  {
    title: "Luxury Beige Coat",
    price: 210,
    category: "Coats",
    gender: "Women",
    tag: "New",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
  },

  {
    title: "Minimal White Shirt",
    price: 88,
    category: "Shirts",
    gender: "Women",
    tag: "Sale",
    image: "https://images.unsplash.com/photo-1603251579431-8041402bdeda?w=600",
  },

  {
    title: "Dark Gray Hoodie",
    price: 135,
    category: "Hoodies",
    gender: "Women",
    tag: "New",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600",
  },

  {
    title: "Winter Black Coat",
    price: 240,
    category: "Coats",
    gender: "Women",
    tag: "Sale",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
  },

  {
    title: "Classic Denim Jacket",
    price: 150,
    category: "Jackets",
    gender: "Women",
    tag: "New",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600",
  },

  {
    title: "Premium Black Shirt",
    price: 92,
    category: "Shirts",
    gender: "Women",
    tag: "Sale",
    image: "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?w=600",
  },

  {
    title: "Essential Cream Hoodie",
    price: 145,
    category: "Hoodies",
    gender: "Women",
    tag: "New",
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600",
  },

];


const seedProducts = async () => {

  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected ✅");


    await Product.deleteMany();

    await Product.insertMany(products);


    console.log("20 Products Added Successfully 🚀");

    process.exit();


  } catch (error) {

    console.log(error);

    process.exit(1);

  }

};


seedProducts();