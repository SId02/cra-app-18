import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

const ProductListSearchSortFilter = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("id");
  const [filterCategory, setFilterCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=100",
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(lowerSearchTerm) ||
          product.description.toLowerCase().includes(lowerSearchTerm),
      );
    }
    if (filterCategory) {
      filtered = filtered.filter(
        (product) => product.category === filterCategory,
      );
    }
    return filtered;
  }, [products, searchTerm, filterCategory]);

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];

    sorted.sort((a, b) => {
      if (sortOption === "price") {
        return a.price - b.price;
      } else if (sortOption === "rating") {
        return b.rating - a.rating;
      }
      return a.id - b.id;
    });

    return sorted;
  }, [filteredProducts, sortOption]);

  const handleSearchChange = (event) => setSearchTerm(event.target.value);
  const handleSortChange = (event) => setSortOption(event.target.value);
  const handleCategoryChange = (event) => setFilterCategory(event.target.value);

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <section className="section py-6">
        <div className="container" style={{ maxWidth: "1200px" }}>
          {/* Header */}
          <div className="has-text-centered mb-6">
            <h1
              className="title is-2 has-text-weight-bold mb-2"
              style={{ color: "#2c3e50" }}
            >
              Product Catalog
            </h1>
            <p className="subtitle is-6 has-text-grey">
              Search, sort, and filter through items seamlessly
            </p>
          </div>

          {/* Filter & Controls Container Card */}
          <div
            className="box p-5 mb-6"
            style={{
              borderRadius: "16px",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
              background: "#ffffff",
            }}
          >
            <div className="columns is-multiline">
              {/* Search Input */}
              <div className="column is-6-tablet">
                <div className="field">
                  <label className="label is-small has-text-grey-dark">
                    Search Products
                  </label>
                  <div className="control">
                    <input
                      className="input is-rounded"
                      type="text"
                      placeholder="Search by title or description..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                  </div>
                </div>
              </div>

              {/* Sort Select */}
              <div className="column is-3-tablet">
                <div className="field">
                  <label className="label is-small has-text-grey-dark">
                    Sort by
                  </label>
                  <div className="control">
                    <div className="select is-rounded is-fullwidth">
                      <select value={sortOption} onChange={handleSortChange}>
                        <option value="id">Default ID</option>
                        <option value="price">Price (Low to High)</option>
                        <option value="rating">Rating (High to Low)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category Filter */}
              <div className="column is-3-tablet">
                <div className="field">
                  <label className="label is-small has-text-grey-dark">
                    Category Filter
                  </label>
                  <div className="control">
                    <div className="select is-rounded is-fullwidth">
                      <select
                        value={filterCategory}
                        onChange={handleCategoryChange}
                      >
                        <option value="">All Categories</option>
                        {[
                          ...new Set(
                            products.map((product) => product.category),
                          ),
                        ].map((category) => (
                          <option key={category} value={category}>
                            {category.charAt(0).toUpperCase() +
                              category.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* States: Loading & Error */}
          {loading && (
            <div className="has-text-centered py-6">
              <p className="has-text-grey has-text-weight-medium">
                Loading products...
              </p>
            </div>
          )}

          {error && (
            <div
              className="notification is-danger is-light has-text-centered mb-5"
              style={{ borderRadius: "8px" }}
            >
              Error: {error}
            </div>
          )}

          {/* Product List Grid */}
          {!loading && !error && (
            <div className="columns is-multiline">
              {sortedProducts.map((product) => (
                <div
                  className="column is-one-third-tablet is-one-quarter-desktop"
                  key={product.id}
                >
                  <div
                    className="box p-4 h-100 is-flex is-flex-direction-column is-justify-content-space-between"
                    style={{
                      borderRadius: "16px",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)",
                      transition: "all 0.2s ease-in-out",
                      background: "#ffffff",
                      height: "100%",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 24px rgba(0, 0, 0, 0.08)";
                      e.currentTarget.style.borderColor = "#3273dc";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(0, 0, 0, 0.03)";
                      e.currentTarget.style.borderColor = "#e2e8f0";
                    }}
                  >
                    <div>
                      <div className="card-image mb-3">
                        <figure
                          className="image is-4by3"
                          style={{
                            background: "#f1f5f9",
                            borderRadius: "12px",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={product.thumbnail}
                            alt={product.title}
                            style={{
                              objectFit: "cover",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </figure>
                      </div>

                      <div className="is-flex is-justify-content-space-between is-align-items-center mb-1">
                        <span className="tag is-info is-light is-rounded is-small has-text-weight-semibold">
                          {product.brand || product.category}
                        </span>
                        <span className="has-text-weight-bold has-text-success is-size-6">
                          ${product.price}
                        </span>
                      </div>

                      <p
                        className="title is-6 has-text-dark mb-2"
                        style={{ minHeight: "2.5rem" }}
                      >
                        {product.title}
                      </p>

                      <p
                        className="is-size-7 has-text-grey mb-4"
                        style={{
                          lineHeight: "1.5",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {product.description}
                      </p>
                    </div>

                    <div
                      className="pt-2"
                      style={{ borderTop: "1px solid #f1f1f1" }}
                    >
                      <span className="is-size-7 has-text-warning-dark has-text-weight-semibold">
                        Rating: {product.rating} / 5
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && sortedProducts.length === 0 && !error && (
            <div className="has-text-centered py-6">
              <p className="has-text-grey">
                No products found matching your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="footer"
        style={{ backgroundColor: "#f1f3f5", borderTop: "1px solid #e2e8f0" }}
      >
        <div className="content has-text-centered">
          <Link
            to="/"
            className="has-text-weight-semibold"
            style={{ color: "#3273dc" }}
          >
            &larr; Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default ProductListSearchSortFilter;