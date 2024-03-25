import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const updateCount = (multiplier = 1) => {
    setCount(count + multiplier);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img
          className="samosa"
          src="https://cdn.shopify.com/s/files/1/1785/5627/t/60/assets/origins_of_chicken_samosa-1697398529680_400x.jpg?v=1697398530"
          alt="Samosa"
          onClick={() => updateCount(1)}></img>
      </div>
      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button>10 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click</p>
          <button>10 samosas</button>
        </div>
      </div>
    </div>
  );
};

export default App;
