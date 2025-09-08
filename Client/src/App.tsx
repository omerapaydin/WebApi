import { useEffect, useState } from "react";
import { IProduct } from "./Model/IProduct";

function App() {
  return (
    <>
      <Header />
      <ProductList />
    </>
  );
}
function Header() {
  return <h1>Header </h1>;
}

function ProductList() {
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
      <h1>Product List</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      <button onClick={addProduct}>AddProduct</button>
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
