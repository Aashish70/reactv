import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Loader from "./Loader";

function Products() {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);

  const fetchProduct = async () => {
    setLoader(true)
    const response = await axios("https://dummyjson.com/products");
    setProducts(response.data.products);
    setLoader(false);
  };

  console.log(products);

  useEffect(() => {
    fetchProduct();
  }, []);

  if(loader) return <Loader className={'p-30'} />

  return (
    <div className="grid grid-cols-4 gap-8 mt-8 mx-16">
      {products.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Products;
