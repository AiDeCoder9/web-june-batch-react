function ProductCard(props) {
  return (
    <div>
      <h6>{props.title}</h6>
      <p>
        {props.price} <span>{props.currency}</span>
      </p>
      {props.inStock ? <span>In Stock</span> : <span>Out of Stock</span>}
    </div>
  );
}

export default ProductCard;
