import React from 'react';

const mockProducts = [
  { id: 1, name: 'Premium Wireless Headphones', price: '$299.99', category: 'Electronics' },
  { id: 2, name: 'Ergonomic Desk Chair', price: '$199.50', category: 'Home' },
  { id: 3, name: 'Minimalist Watch', price: '$149.00', category: 'Accessories' },
  { id: 4, name: 'Mechanical Keyboard', price: '$129.99', category: 'Electronics' },
];

const UserPortal = () => {
  return (
    <div>
      <div className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
        <div>
          <h1>Featured Products</h1>
          <p>Discover our curated collection of premium items.</p>
        </div>
        <button className="btn-primary">View Cart (0)</button>
      </div>

      <div className="grid grid-cols-4">
        {mockProducts.map((product) => (
          <div key={product.id} className="glass-panel product-card">
            <div className="product-img"></div>
            <h3>{product.name}</h3>
            <p style={{ fontSize: '0.875rem' }}>{product.category}</p>
            <div className="product-price">{product.price}</div>
            <button className="btn-primary" style={{ width: '100%' }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPortal;
