import MealItem from "./MealItem";
import { useMealsListContext } from "./MealsProvider";

const MealsList = () => {
  /* We are destructuring meals property from the object returned by the below fun*/
  const { meals } = useMealsListContext();

  return (
    <div>
      <h1> Meals List using Context API</h1>
      {meals.map((meal, index) => (
        <h2 key={index}> {meal}</h2>
      ))}
    </div>
  );
};

export default MealsList;
