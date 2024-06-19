import React, { useState } from 'react';
import './ProductCard.css';

function ProductCard({ title, price }) {
    const [isPriceVisible, setIsPriceVisible] = useState(true);

    const togglePriceVisibility = () => {
        setIsPriceVisible(!isPriceVisible);
    };

    return (
        <div className="product-card">
            <p onClick={togglePriceVisibility}>{title}</p>
            {isPriceVisible && <p>{price}</p>}
        </div>
    );
}

export default ProductCard;
