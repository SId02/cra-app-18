import  { useState, useEffect } from 'react';

const ProductListPaginations = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const productsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${productsPerPage}&_page=${currentPage}`
        );
        const data = await response.json();
        setProducts(data);
        setTotalPages(10); 
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, productsPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationButtons = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <nav className="pagination is-centered" role="navigation" aria-label="pagination">
        <ul className="pagination-list">
          {pageNumbers.map((number) => (
            <li key={number}>
              <a
                className={`pagination-link ${currentPage === number ? 'is-current' : ''}`}
                aria-label={`Go to page ${number}`}
                onClick={() => handlePageChange(number)}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1 className="title">Product List</h1>
      <div className="columns is-multiline">
        {products.map((product) => (
          <div className="column is-one-third" key={product.id}>
            <div className="card">
              <div className="card-content">
                <p className="title is-4">{product.title}</p>
                <div className="content">{product.body}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {renderPaginationButtons()}
    </div>
  );
};

export default ProductListPaginations;