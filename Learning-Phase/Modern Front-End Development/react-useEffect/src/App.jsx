import React, { useEffect, useState } from "react";
import Card from "./Card";

function App() {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.in/api/products")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);

  console.log(data);

  return (
    <div className="flex items-center justify-center p-12">
      {data.map((products) => (
        <Card
          key={products.id}
          title={products.title}
          description={products.description}
          category={products.category}
          image={products.image}
          brand={products.brand}
          color={products.color}
          price={products.price}
        />
      ))}
    </div>
  );
}

export default App;
