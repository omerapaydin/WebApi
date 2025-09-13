import { Grid } from "@mui/material";
import { IProduct } from "../../Model/IProduct";
import Product from "./Products-";

interface Props {
  products: IProduct[];
}

export default function ProductList({ products }: Props) {
  return (
    <Grid container spacing={2}>
      {products.map((p: IProduct) => (
        <Grid key={p.id} size={{ xs: 6, md: 4, lg: 3 }}>
          <Product key={p.id} product={p} />
        </Grid>
      ))}
    </Grid>
  );
}
