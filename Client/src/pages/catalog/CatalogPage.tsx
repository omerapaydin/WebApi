import { useEffect, useState } from "react";
import { IProduct } from "../../model/IProduct";
import ProductList from "./ProductList";

export default function CatalogPage() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:5226/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return <ProductList products={products} />;
}
