import { useState } from "react";

function Question1() {
  const [isShown, setShown] = useState(true);
  const toggle = () => {
    setShown(!isShown);
  };
  return (
    <div>
      {isShown && <p>Hello World</p>}
      <button onClick={toggle}>
        {isShown ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
}

export default Question1;
