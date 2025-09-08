export default function Product(props: any) {
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
