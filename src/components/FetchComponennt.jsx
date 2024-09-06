import React from 'react';
import useFecth from '../hooks/useFecth';

export default function FetchComponent() {
  const { data: products, loading, error } = useFecth('https://api.escuelajs.co/api/v1/products');
  console.log(products);

  return (
    <div className="fetch-component">
      <h1>useFetch Table</h1>

      {error ? (
        <div className="error-message">Error: {error.message}</div>
      ) : loading ? (
        <div className="loading-message">Loading...</div>
      ) : products && products.length > 0 ? (
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
}
