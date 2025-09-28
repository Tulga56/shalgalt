import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, favorites, toggleFavorite }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: 20,
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.some((fav) => fav.id === product.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}
