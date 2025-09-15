import { useEffect, useState } from "react";

// states - modify garna milxa - useState hook - mutable - cause re-render
// props - modify garna mildaina - parent bata child ma data pathauna milxa - immutable - no re-render

function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    console.log("useEffect called");
  }, [count, isOpen]); //dependency array

  const increment = () => {
    setCount(count + 1);
  };
  const toggle = () => {
    setOpen(!isOpen); // Not operator
  };

  // hooks - useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback
  return (
    <div>
      Component Lifecycle {count}
      <h1>{isOpen ? "Open" : "closed"}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default App;
