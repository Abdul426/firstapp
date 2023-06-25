import { useState } from "react";

export default function UseStateDemo() {
  const [text, setText] = useState("");

  //setText("error?");

  function handleEnteredText(e) {
    //text = text + e.target.value;
    setText(e.target.value);
    console.log("text: " + text);
  }

  return (
    <div>
      <p>You Entered: {text}</p>
      {/*Here we are binding input with text to reset on button click event*/}
      <input value={text} onChange={handleEnteredText} />
      <button onClick={() => setText("")}> Reset</button>
    </div>
  );
}
