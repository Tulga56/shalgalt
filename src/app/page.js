"use Client";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
// interface products {
//   params: { id: string };
//   params: { title: string };
//   params: { description: string };
//   params: { category: string };
//   params: { image: string };
// }
// export default function Shalgalt({ params }: products)
{
  const [value, setValue] = useState(" ");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setValue(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {value.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <Image src={item.image} alt={item.title} width={200} height={200} />
        </div>
      ))}
    </div>
  );
}
