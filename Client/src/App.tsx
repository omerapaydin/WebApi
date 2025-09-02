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
  return <h1>Header </h1>;
}

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 1000, isActive: true },
    { id: 2, name: "Product 2", price: 2000, isActive: true },
    { id: 3, name: "Product 3", price: 3000, isActive: true },
  ]);

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
