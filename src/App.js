import "./App.css";

import MealsCounter from "./MealsCounter";
import MealsList from "./MealsList";
import MealsProvider from "./MealsProvider";

function App() {
  return (
    <div>
      <MealsProvider>
        <MealsList />
        <MealsCounter />
      </MealsProvider>
    </div>
  );
}

export default App;
