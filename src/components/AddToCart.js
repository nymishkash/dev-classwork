import React, { useState } from 'react';

const AddToCart = () => {
  const [quantity, setQuantity] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setQuantity(1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setIsAdded(false);
      setQuantity(0);
    }
  };

  return (
    <div>
      {!isAdded ? (
        <button onClick={handleAddToCart}>Add to Cart</button>
      ) : (
        <div>
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
