import { useState } from "react";

//logical operator
// && And
// || Or
// ! Not

function Question2() {
  const [text, setText] = useState("");

  const textChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>{text}</h1>
      <p className={text.length >= 90 && "text-red-500"}>{text.length}</p>
      <input onChange={textChange} className="border" type="text" />
    </div>
  );
}

export default Question2;
