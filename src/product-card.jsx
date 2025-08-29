function ProductCard(props) {
  const { title, price = "200", currency = "USD", inStock = true } = props;
  return (
    <div>
      {title && <h6>{title}</h6>}
      <p>
        {price} <span>{currency}</span>
      </p>
      {inStock ? <span>In Stock</span> : <span>Out of Stock</span>}
    </div>
  );
}

export default ProductCard;
