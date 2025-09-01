const products = [
  { id: 1, name: "Product 1", price: 1000 },
  { id: 2, name: "Product 2", price: 2000 },
  { id: 3, name: "Product 3", price: 3000 },
];

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
      <Product product={products[0]} />
      <Product product={products[1]} />
      <Product product={products[2]} />
    </>
  );
}
function Product(props: any) {
  return (
    <div>
      <h3> {props.product.name} </h3>- <p> {props.product.price}</p>
    </div>
  );
}
export default App;
