import { Grid2 } from "@mui/material";
import { IProduct } from "../../Model/IProduct";
import Product from "./Products-";

interface Props {
  products: IProduct[];
}

export default function ProductList({ products }: Props) {
  return (
    <Grid2 container spacing={2}>
      {products.map((p: IProduct) => (
        <Grid2 key={p.id} size={{ xs: 6, md: 4, lg: 3 }}>
          <Product key={p.id} product={p} />
        </Grid2>
      ))}
    </Grid2>
  );
}
