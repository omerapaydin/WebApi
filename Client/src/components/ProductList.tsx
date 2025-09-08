import { IProduct } from "../Model/IProduct";
import Product from "./Product";

interface Props {
  products: IProduct[];
  addProduct: () => void;
}

export default function ProductList({ products, addProduct }: Props) {
  return (
    <>
      <h1>Product List</h1>
      {products.map((p: IProduct) => (
        <Product key={p.id} product={p} />
      ))}

      <button onClick={addProduct}>AddProduct</button>
    </>
  );
}
