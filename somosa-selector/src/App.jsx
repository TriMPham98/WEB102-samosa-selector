import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => {
    setCount(count + multiplier);
  };

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 1.02);
      setCount(count - 10);
    }
  };

  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 1.05);
      setCount(count - 100);
    }
  };

  const buyFullFeast = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 1.10);
      setCount(count - 1000);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Multiplier: {multiplier.toFixed(2)}x</h2>
        <h2>Count: {count}</h2>
        <img
          className="samosa"
          src="../src/assets/samosa.png"
          width={690}
          alt="Samosa"
          onClick={updateCount}></img>
      </div>
      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>1.02x per click</p>
          <button onClick={buyDoubleStuffed}>10 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>1.05x per click</p>
          <button onClick={buyPartyPack}>100 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Full Feast 🧑🏼‍🍳</h3>
          <p>1.10x per click</p>
          <button onClick={buyFullFeast}>1000 samosas</button>
        </div>
      </div>
    </div>
  );
};

export default App;
