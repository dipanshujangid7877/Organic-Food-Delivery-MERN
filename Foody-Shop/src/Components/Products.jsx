import "aos/dist/aos.css";
import AOS from "aos";
import "../Styles/Products.css";
import { useEffect, useState } from "react";
import Footer from "./Footer.jsx";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";

const fallbackProducts = [
  {
    _id: "local-1",
    name: "Fresh Strawberry Bowl",
    price: 149,
    description: "Sweet strawberries with a fresh, healthy breakfast mix.",
    image_url: feature1,
  },
  {
    _id: "local-2",
    name: "Organic Juice Pack",
    price: 199,
    description: "Cold pressed juice made with seasonal fruits.",
    image_url: feature2,
  },
  {
    _id: "local-3",
    name: "Healthy Fruit Basket",
    price: 299,
    description: "A handpicked basket of clean and naturally ripe fruits.",
    image_url: feature3,
  },
];

function Products({ onAddToCart }) {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to fetch products");
        }
        return response.json();
      })
      .then((productsData) => {
        setData(productsData.data || []);
        setStatus("ready");
      })
      .catch(() => {
        setData(fallbackProducts);
        setStatus("offline");
      });
  }, []);

  const handleAddToCart = (product) => {
    onAddToCart(product);
    alert(`${product.name} added to cart`);
  };

  return (
    <>
      <main className="products-page">
        <section className="products-header">
          <h1>Our Products</h1>
          <h3>Home / Products page</h3>
        </section>
        {status === "loading" && (
          <p className="product-status">Loading products...</p>
        )}
        {status === "offline" && (
          <p className="product-status">
            Backend is offline, showing sample products so shopping still works.
          </p>
        )}
        <section className="products-grid">
          {data.map((product) => (
            <article key={product._id} data-aos="zoom-in-up" className="product-card">
              <div className="products-image">
                <img src={product.image_url} alt={product.name} />
              </div>
              <div className="about-products">
                <div className="product-name">
                  <h2>{product.name}</h2>
                  <p>
                    <b>Price: Rs. {product.price}</b>
                  </p>
                </div>
                <p className="product-description">{product.description}</p>
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Products;
