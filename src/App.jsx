import Button from "./button";
import FruitList from "./fruitlist";
import Greeting from "./greeting";
import ProductCard from "./product-card";
import StatusIndicator from "./status-indicator";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <FruitList />
      <Greeting name="Sajan" />
      <Greeting name="Sushil" />
      <Greeting name="Rajani" />
      <Greeting name="Pujan" />
      <ProductCard title="Macbook" price="100" currency="USD" inStock={false} />
      <StatusIndicator />

      <p>This is a simple React application.</p>
      {/* props */}
      <Button title="Sign In" color="green" />
      <Button title="Register" color="yellow" />
      <Button title="Loading" color="gold" />
      <Button title="Contact Us" color="purple" />
      <Button title="Email Us" color="blue" />
    </div>
  );
}

export default App;
