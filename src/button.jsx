function Button(props) {
  return (
    <button type="btn" style={{ backgroundColor: props.color, padding: 12 }}>
      {props.title}
    </button>
  );
}
export default Button;
