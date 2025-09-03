import { useState } from "react";

function Multiply() {
  const [first, setFirst] = useState(10);
  const [second, setSecond] = useState(4);
  const [output, setOutput] = useState(null);

  const handleFirst = (event) => {
    setFirst(event.target.value);
  };

  const handleSecond = (event) => {
    setSecond(event.target.value);
  };
  const multiply = () => {
    const output = first * second;
    setOutput(output);
  };
  return (
    <div>
      <h1>Multiplication App</h1>
      <h1>{output}</h1>
      <input
        value={first}
        onChange={handleFirst}
        className="border"
        type="number"
      />
      <input
        value={second}
        onChange={handleSecond}
        className="border"
        type="number"
      />
      <button onClick={multiply}>Multiply</button>
    </div>
  );
}
export default Multiply;
