import { IProduct } from "../Model/IProduct";
import Product from "./Product";

export default function ProductList(props: any) {
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
