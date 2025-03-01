import React, { useState, useEffect } from 'react';

const ProductListSearchSortFilter = () => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('id'); 
    const [filterCategory, setFilterCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('https://dummyjson.com/products');
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
    const filteredProducts = React.useMemo(() => {
        let filtered = products;

        if (searchTerm) {
            const lowerSearchTerm = searchTerm.toLowerCase();
            filtered = filtered.filter(product =>
                product.title.toLowerCase().includes(lowerSearchTerm) ||
                product.description.toLowerCase().includes(lowerSearchTerm)
            );
        }
        if (filterCategory) {
            filtered = filtered.filter(product => product.category === filterCategory);
        }
        return filtered;
    }, [products, searchTerm, filterCategory]);

    const sortedProducts = React.useMemo(() => {
        const sorted = [...filteredProducts]; 

        sorted.sort((a, b) => {
            if (sortOption === 'price') {
                return a.price - b.price;
            } else if (sortOption === 'rating') {
                return b.rating - a.rating; 
            }
        
            return a.id - b.id;
        });

        return sorted;
    }, [filteredProducts, sortOption]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setFilterCategory(event.target.value);
    };

    if (loading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="container">
            <h1 className="title">Product List</h1>
            <div className="container">
                <div className="columns">
                    <div className="column">
                        {/* Search Input */}
                        <div className="field">
                            <label className="label">Search:</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Search products"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="column is-3">
                        {/* Sort Select */}
                        <div className="field">
                            <label className="label">Sort by:</label>
                            <div className="control">
                                <div className="select">
                                    <select value={sortOption} onChange={handleSortChange}>
                                        <option value="id">ID</option>
                                        <option value="price">Price</option>
                                        <option value="rating">Rating</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-3">
                        {/* Category Filter */}
                        <div className="field">
                            <label className="label">Filter by Category:</label>
                            <div className="control">
                                <div className="select">
                                    <select value={filterCategory} onChange={handleCategoryChange}>
                                        <option value="">All Categories</option>
                                        {[...new Set(products.map(product => product.category))].map(category => (
                                            <option key={category} value={category}>{category}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product List after Search Sort Filter */}
            <div className="columns is-multiline">
                {sortedProducts.map(product => (
                    <div className="column is-one-third" key={product.id}>
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src={product.thumbnail} alt={product.title} />
                                </figure>
                            </div>
                            <div className="card-content">
                                <p className="title is-4">{product.title}</p>
                                <p className="subtitle is-6">{product.brand}</p>
                                <div className="content">{product.description}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListSearchSortFilter;