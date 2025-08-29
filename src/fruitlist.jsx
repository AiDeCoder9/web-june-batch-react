function FruitList() {
  const fruits = [
    "Apple",
    "Banana",
    "Grape",
    "Strawberry",
    "Orange",
    "Pineapple",
  ];
  return (
    <ul>
      {fruits.map(function (item, index) {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
}

export default FruitList;
