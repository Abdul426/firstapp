import { useReducer, useState } from "react";
import "./App.css";

const reducer = (state, action) => {
  if (action.type === "credit") return { money: state.money + action.amount };
  if (action.type === "debit") return { money: state.money - action.amount };
  return new Error();
};

function App() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [amount, setAmount] = useState(0);

  const creditVallet = () => {
    console.log(amount);
    dispatch({ type: "credit", amount });
  };

  const debitVallet = () => {
    console.log(amount);
    dispatch({ type: "debit", amount });
  };

  function updateAmount(e) {
    console.log(e.target.value);
    setAmount(parseInt(e.target.value));
  }

  return (
    <div className="App">
      <h1>Wallet: {state.money}</h1>
      <p>Enter amount</p>
      <input onChange={updateAmount} />
      <button onClick={creditVallet}>Credit</button>
      <button onClick={debitVallet}>Debit</button>
    </div>
  );
}

export default App;
