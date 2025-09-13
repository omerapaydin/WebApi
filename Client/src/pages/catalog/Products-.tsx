import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { AddShoppingCart, Search } from "@mui/icons-material";
import { IProduct } from "../../Model/IProduct";

interface Props {
  product: IProduct;
}

export default function Product({ product }: Props) {
  return (
    <Card>
      <CardMedia
        sx={{ height: 160, backgroundSize: "contain" }}
        component="img"
        image={`http://localhost:5226/images/${product.imageUrl}`}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          color="text.secondary"
        >
          {product.name}
        </Typography>
        <Typography variant="body2" color="secondary">
          {(product.price / 100).toFixed(2)} TL
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="outlined"
          size="small"
          startIcon={<AddShoppingCart />}
          color="success"
        >
          Add to cart
        </Button>
        <Button
          variant="outlined"
          size="small"
          startIcon={<Search />}
          color="primary"
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}
