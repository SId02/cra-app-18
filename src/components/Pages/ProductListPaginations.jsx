import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductListPaginations = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [loading, setLoading] = useState(false);
  const productsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${productsPerPage}&_page=${currentPage}`,
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPaginationButtons = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <nav
        className="pagination is-centered mt-6"
        role="navigation"
        aria-label="pagination"
      >
        <ul className="pagination-list">
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                className={`pagination-link ${currentPage === number ? "is-current" : ""}`}
                aria-label={`Go to page ${number}`}
                onClick={() => handlePageChange(number)}
                style={{
                  borderRadius: "8px",
                  border: currentPage === number ? "none" : "1px solid #e2e8f0",
                  backgroundColor:
                    currentPage === number ? "#3273dc" : "#ffffff",
                  fontWeight: currentPage === number ? "bold" : "normal",
                }}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

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
        <div className="container" style={{ maxWidth: "1100px" }}>
          {/* Header */}
          <div className="has-text-centered mb-6">
            <h1
              className="title is-2 has-text-weight-bold mb-5"
              style={{ color: "#2c3e50" }}
            >
              Product Directory
            </h1>
            <p className="subtitle is-6 has-text-grey">
              Browse through paginated records seamlessly
            </p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="has-text-centered py-6">
              <p className="has-text-grey has-text-weight-medium">
                Loading products...
              </p>
            </div>
          )}

          {/* Product Cards Grid */}
          {!loading && (
            <div className="columns is-multiline">
              {products.map((product) => (
                <div
                  className="column is-one-third-tablet is-one-quarter-desktop"
                  key={product.id}
                >
                  <div
                    className="box p-5 h-100 is-flex is-flex-direction-column is-justify-content-space-between"
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
                      <span className="tag is-info is-light is-rounded has-text-weight-semibold mb-3">
                        #{product.id}
                      </span>
                      <p
                        className="title is-6 has-text-dark mb-2"
                        style={{ minHeight: "3rem" }}
                      >
                        {product.title}
                      </p>
                      <p
                        className="is-size-7 has-text-grey"
                        style={{ lineHeight: "1.6" }}
                      >
                        {product.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination Navigation */}
          {!loading && renderPaginationButtons()}
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

export default ProductListPaginations;