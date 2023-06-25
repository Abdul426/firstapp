import { useRef } from "react";

export default function MealItem(props) {
  const mealTakenButton = useRef(null);

  function doOpe() {
    props.onClick();
    mealTakenButton.current.disabled = true;
  }

  return (
    <div>
      <h3>M: {props.meal}</h3>
      <button onClick={doOpe} ref={mealTakenButton}>
        Eat
      </button>
    </div>
  );
}
