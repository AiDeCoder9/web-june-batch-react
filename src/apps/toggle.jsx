import TurnOnImage from "../assets/turnedon.png";
import TurnOffImage from "../assets/turnedoff.png";
import { useState } from "react";

//ternary operator

function Toggle() {
  const [isOn, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOn);
  };
  return (
    <div>
      {isOn ? (
        <img src={TurnOnImage} className="w-10 h-10" alt="Turn on image" />
      ) : (
        <img src={TurnOffImage} className="w-10 h-10" alt="Turn off image" />
      )}

      <button onClick={toggle}>Toggle</button>
    </div>
  );
}

export default Toggle;
