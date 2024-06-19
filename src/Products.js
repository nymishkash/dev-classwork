import React, { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard';

// const products = [
//     {
//     id: 1,
//     title: "Apple iPhone 14",
//     price: "Rs. 1,00,000"
//     },
//     {
//     id: 2,
//     title: "Apple iPhone 13",
//     price: "Rs. 70,000"
//     },
//     {
//     id: 3,
//     title: "Google Pixel 7",
//     price: "Rs. 50,000"
//     },
//     {
//     id: 4,
//     title: "Nokia 1100",
//     price: "Rs. 2,000"
//     },
//     {
//     id: 5,
//     title: "Samsung Galaxy S10",
//     price: "Rs. 1,00,000"
//     },
//     {
//     id: 6,
//     title: "Sony Xperia S10",
//     price: "Rs. 1,00,000"
//     }
// ];

function Products() {
    const [products, setProducts] = useState([]);
    const [inputValues, setInputValues] = useState({});
    const [displayTexts, setDisplayTexts] = useState({});

    useEffect(() => {
        fetch("https://666bc35c49dbc5d7145b25dc.mockapi.io/products")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
                const initialInputValues = {};
                const initialDisplayTexts = {};
                data.forEach(item => {
                    initialInputValues[item.id] = '';
                    initialDisplayTexts[item.id] = 'The input text is displayed here -';
                });
                setInputValues(initialInputValues);
                setDisplayTexts(initialDisplayTexts);
            })
            .catch(error => console.error('Fetching error:', error));
    }, []);

    const handleInputChange = (id, value) => {
        setInputValues(prevValues => ({ ...prevValues, [id]: value }));
        setDisplayTexts(prevTexts => ({ ...prevTexts, [id]: `The input text is displayed here - ${value}` }));
    };

    return (
        <div>
            I am products
            {
                products.map((item) => (
                    <div key={item.id}>
                        <ProductCard title={item.title} price={item.price} />
                        <img src="/logo512.png" alt="placeholder" />
                        <input 
                            type="text" 
                            value={inputValues[item.id]} 
                            onChange={(e) => handleInputChange(item.id, e.target.value)} 
                        />
                        <p>{displayTexts[item.id]}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default Products;
