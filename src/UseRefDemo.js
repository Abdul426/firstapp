import { useRef } from "react";

export default function UseRefDemo() {
  const inputEl = useRef(null);
  const inputE2 = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.value = "1";
    inputEl.current.focus();
    inputE2.current.value = "2";
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <input type="text" ref={inputE2} />
      <button onClick={onButtonClick}>Reset</button>
    </>
  );
}
