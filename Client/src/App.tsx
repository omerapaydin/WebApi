import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Header />
      <ProductList />
    </>
  );
}

function Header() {
  return <h1>Header</h1>;
}
function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: "product 1", price: 1000, isActive: true },
    { id: 2, name: "product 2", price: 2000, isActive: true },
    { id: 3, name: "product 3", price: 3000, isActive: true },
  ]);

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
      <h2>ProductList</h2>
      {products.map((p) => (
        <Product key={p.id} product={p} />
      ))}

      <button onClick={addProduct}>Product</button>
    </>
  );
}
function Product(props: any) {
  return (
    <>
      {props.product.isActive && (
        <>
          <h3>{props.product.name}</h3>
          <p>{props.product.price}</p>
        </>
      )}
    </>
  );
}

export default App;
