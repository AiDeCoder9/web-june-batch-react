// Core concept of React: Props - Parent to Child, props cannot be changed
// Core concept of React: State

import { useState } from "react";

function App() {
  const [count, setCount] = useState(10);
  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={decrease}>Decrease</button>
      <span>{count}</span>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default App;
