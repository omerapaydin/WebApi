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
  return (
    <>
      <h1>Product List</h1>
      <Product />
    </>
  );
}
function Product() {
  return <h1>Product</h1>;
}

export default App;
