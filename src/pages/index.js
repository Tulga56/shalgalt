import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(favs);
  }, []);

  const toggleFavorite = (product) => {
    let updatedFavorites = [];
    if (favorites.find((fav) => fav.id === product.id)) {
      updatedFavorites = favorites.filter((fav) => fav.id !== product.id);
    } else {
      updatedFavorites = [...favorites, product];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div style={{ padding: "20px", maxWidth: 900, margin: "auto" }}>
      <h1>Бүтээгдэхүүний жагсаалт</h1>
      <ProductList
        products={products}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}
