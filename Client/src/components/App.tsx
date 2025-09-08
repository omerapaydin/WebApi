import { useEffect, useState } from "react";
import { IProduct } from "../Model/IProduct";
import Header from "./Header";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch("http://localhost:5239/api/Products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts([
      ...products,
      { id: Date.now(), name: "Product 4", price: 4000, isActive: true },
    ]);
  }

  return (
    <>
      <Header products={products} />
      <ProductList products={products} addProduct={addProduct} />
    </>
  );
}

function ProductList(props: any) {
  return (
    <>
      <h1>Product List</h1>
      {props.products.map((p: IProduct) => (
        <Product key={p.id} product={p} />
      ))}

      <button onClick={props.addProduct}>AddProduct</button>
    </>
  );
}

function Product(props: any) {
  return (
    <div>
      {props.product.isActive ? (
        <div>
          <h3> {props.product.name} </h3>
          <p> {props.product.price}</p>
        </div>
      ) : (
        <p>ürün satışta değil</p>
      )}
    </div>
  );
}
export default App;
