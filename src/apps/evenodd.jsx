import { useState } from "react";

function EvenOdd() {
  const [first, setFirst] = useState(10);
  const [output, setOutput] = useState(null);

  const handleFirst = (event) => {
    setFirst(event.target.value);
  };

  const check = () => {
    if (first % 2 === 0) {
      setOutput("Even");
    } else {
      setOutput("Odd");
    }
  };
  return (
    <div>
      <h1>Even Odd Checker App</h1>
      <h1>{output}</h1>
      <input
        value={first}
        onChange={handleFirst}
        className="border"
        type="number"
      />

      <button onClick={check}>Check</button>
    </div>
  );
}
export default EvenOdd;
