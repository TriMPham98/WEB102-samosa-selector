import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => {
    setCount(parseFloat((count + multiplier).toFixed(1)));
  };

  const buyDoubleStuffed = () => {
    if (count >= 25) {
      setMultiplier(multiplier * 1.05);
      setCount(parseFloat((count - 25).toFixed(1)));
    }
  };

  const buyPartyPack = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 1.25);
      setCount(parseFloat((count - 1000).toFixed(1)));
    }
  };

  const buyFullFeast = () => {
    if (count >= 10000) {
      setMultiplier(multiplier * 1.50);
      setCount(parseFloat((count - 10000).toFixed(1)));
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Multiplier: {multiplier.toFixed(2)}x</h2>
        <h2>Count: {count.toFixed(1)}</h2>
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
          <p>1.05x per click</p>
          <button onClick={buyDoubleStuffed}>25 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>1.25x per click</p>
          <button onClick={buyPartyPack}>1000 samosas</button>
        </div>
        <div className="upgrade">
          <h3>Full Feast 🧑🏼‍🍳</h3>
          <p>1.50x per click</p>
          <button onClick={buyFullFeast}>10000 samosas</button>
        </div>
      </div>
    </div>
  );
};

export default App;
