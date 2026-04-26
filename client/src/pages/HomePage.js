import React, { useEffect, useState } from "react";
import Layout from "./../components/Layout/Layout";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const getProducts = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch("/api/v1/products");
        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.message || "Unable to fetch products.");
        }

        if (isMounted) {
          setProducts(data.products);
        }
      } catch (fetchError) {
        if (isMounted) {
          setError(fetchError.message || "Something went wrong while loading products.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    getProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Layout>
      <section className="hero-section">
        <div className="container py-5">
          <div className="hero-card">
            <p className="hero-kicker">Live MongoDB Data</p>
            <h1 className="hero-title">Featured Products</h1>
            <p className="hero-copy">
              Dummy catalog items are now being served from MongoDB Atlas through
              your backend API and rendered here on the frontend.
            </p>
          </div>
        </div>
      </section>

      <section className="container pb-5">
        {isLoading ? (
          <div className="status-card">Loading products from MongoDB...</div>
        ) : null}

        {!isLoading && error ? (
          <div className="status-card status-card-error">{error}</div>
        ) : null}

        {!isLoading && !error ? (
          <div className="row g-4">
            {products.map((product) => (
              <div className="col-12 col-md-6 col-xl-4" key={product._id}>
                <article className="product-card h-100">
                  <img
                    className="product-card-image"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="product-card-body">
                    <div className="product-card-meta">
                      <span>{product.category}</span>
                      <span>Stock: {product.inventory}</span>
                    </div>
                    <h2 className="product-card-title">{product.name}</h2>
                    <p className="product-card-description">
                      {product.description}
                    </p>
                    <div className="product-card-footer">
                      <strong className="product-card-price">
                        ${product.price}
                      </strong>
                      <span className="product-card-badge">Dummy Data</span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        ) : null}
      </section>
    </Layout>
  );
};

export default HomePage;
