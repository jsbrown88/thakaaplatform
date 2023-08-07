import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductListing = () => {
    const [productList, setProductList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');

    useEffect(() => {
        getProductList();
    }, []);

    const getProductList = async () => {
        try {
            const response = await axios.get('/api/product');
            setProductList(response.data);
        } catch (error) {
            console.error(`Error fetching products: ${error}`);
        }
    };

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const handleFilter = event => {
        setFilter(event.target.value);
    };

    const filteredProducts = productList.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input type="text" placeholder="Search products" value={searchTerm} onChange={handleSearch} />
            <select value={filter} onChange={handleFilter}>
                <option value="">All</option>
                <option value="metaverse">Metaverse</option>
                <option value="ai">AI</option>
                <option value="blockchain">Blockchain</option>
            </select>
            <div>
                {filteredProducts.map(product => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <img src={product.image} alt={product.name} />
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                        <p>Seller: {product.seller}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListing;