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
      {/* Hero Section */}
      <section className="bg-[radial-gradient(circle_at_top_left,_rgba(255,208,122,0.35),_transparent_38%),_linear-gradient(135deg,_#f8f4eb_0%,_#eef2f7_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-[0_20px_45px_rgba(25,41,61,0.12)]">
            <p className="text-[#8b5e34] text-sm font-bold tracking-widest uppercase mb-3">Live MongoDB Data</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4">Featured Products</h1>
            <p className="text-[#52606d] text-base md:text-lg leading-relaxed max-w-3xl">
              Dummy catalog items are now being served from MongoDB Atlas through
              your backend API and rendered here on the frontend.
            </p>
          </div>
        </div>
      </section>

      {/* Product List Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {isLoading ? (
          <div className="bg-[#f6efe5] text-[#5c4631] font-medium p-5 rounded-2xl mb-6">
            Loading products from MongoDB...
          </div>
        ) : null}

        {!isLoading && error ? (
          <div className="bg-[#fff0f0] text-[#a83f3f] font-medium p-5 rounded-2xl mb-6">
            {error}
          </div>
        ) : null}

        {!isLoading && !error ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <article 
                key={product._id} 
                className="bg-white rounded-3xl overflow-hidden shadow-[0_18px_36px_rgba(15,23,42,0.1)] hover:shadow-[0_24px_44px_rgba(15,23,42,0.14)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full border border-gray-100"
              >
                <img
                  className="w-full h-64 object-cover"
                  src={product.image}
                  alt={product.name}
                />
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4 text-[#7c8a97] text-xs uppercase tracking-wider font-semibold">
                    <span>{product.category}</span>
                    <span>Stock: {product.inventory}</span>
                  </div>
                  <h2 className="text-2xl font-serif text-gray-900 mb-3">{product.name}</h2>
                  <p className="text-[#52606d] leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-auto">
                    <strong className="text-2xl text-[#132238] font-bold">
                      ${product.price}
                    </strong>
                    <span className="bg-[#132238] text-white text-xs font-semibold px-4 py-2 rounded-full tracking-wider uppercase">
                      Dummy Data
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </section>
    </Layout>
  );
};

export default HomePage;
