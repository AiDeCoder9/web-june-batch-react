import { useState } from "react";

function TypeWriter() {
  const [text, setText] = useState("");
  //event
  const changeText = (event) => {
    console.log(event);
    setText(event.target.value);
  };

  return (
    <div>
      <h1>{text}</h1>
      <input
        onChange={changeText}
        className="bg-gray-200 border"
        value={text}
        type="text"
        placeholder="enter your text"
      />
    </div>
  );
}
export default TypeWriter;
