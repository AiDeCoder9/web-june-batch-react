import Button from "./button";

function App() {
  return (
    <div>
      <h1>Hello World</h1>

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
