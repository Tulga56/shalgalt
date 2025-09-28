import React from "react";
import Image from "next/image";

export default function ProductCard({ product, isFavorite, toggleFavorite }) {
  // product болон product.image байх эсэхийг шалгах
  if (!product || !product.image) {
    return <div>Бүтээгдэхүүний зураг байхгүй байна</div>;
  }

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: 8,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Image
        src={product.image}
        alt={product.title}
        width={150}
        height={150}
        style={{ objectFit: "contain", marginBottom: 10 }}
      />
      <h3 style={{ fontSize: 16, height: 50 }}>{product.title}</h3>
      <p style={{ fontWeight: "bold" }}>${product.price}</p>
      <button
        onClick={() => toggleFavorite(product)}
        style={{
          padding: "6px 12px",
          backgroundColor: isFavorite ? "red" : "gray",
          color: "white",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
        }}
      >
        {isFavorite ? "Favorite ❤️" : "Add to Favorite"}
      </button>
    </div>
  );
}
