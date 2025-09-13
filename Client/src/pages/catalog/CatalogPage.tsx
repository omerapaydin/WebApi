import { useEffect, useState } from "react";
import requests from "../../api/Request";
import { CircularProgress } from "@mui/material";
import { IProduct } from "../../Model/IProduct";
import ProductList from "./ProductList";

export default function CatalogPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requests.Catalog.list()
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <CircularProgress />;

  return <ProductList products={products} />;
}
