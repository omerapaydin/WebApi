import { useEffect, useState } from "react";
import { IProduct } from "../model/IProduct";
import Header from "./Header";
import ProductList from "./ProductList";
import ButtonUsage from "./ButtonUsage";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:5226/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts([
      ...products,
      { id: Date.now(), name: "product 4", price: 4000, isActive: true },
    ]);
  }

  return (
    <>
      <Header products={products} />
      <ProductList products={products} addProduct={addProduct} />
      <ButtonUsage />
    </>
  );
}

export default App;
