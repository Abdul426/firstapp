import "./App.css";

import Header from "./Header";
import Message from "./Message";
import Btn from "./Btn";
import UseStateDemo from "./UseStateDemo";
import UseRefDemo from "./UseRefDemo";
import { useState, useRef } from "react";
import MealsList from "./MealsList";
import MealsCounter from "./MealsCounter";

const myfun = (message) => {
  return <p> Message from myfun: {message.toString()}</p>;
};
const Image = (props) => {
  return <img src={props.url}></img>;
};

function App() {
  const [mealsReamining, setMealsReamining] = useState(3);

  function mealEaten() {
    setMealsReamining(mealsReamining - 1);
  }

  return (
    <div>
      <MealsList meal="meal 1" onClick={mealEaten} />
      <MealsList meal="meal 2" onClick={mealEaten} />
      <MealsList meal="meal 3" onClick={mealEaten} />
      <MealsCounter mealsReamining={mealsReamining} />
    </div>
  );
}

export default App;
