import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  // Function to format numbers with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const updateCount = () => {
    setCount(parseFloat((count + multiplier).toFixed(2)));
  };

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 1.01);
      setCount(parseFloat((count - 10).toFixed(2)));
    }
  };

  const buyPartyPack = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 1.25);
      setCount(parseFloat((count - 1000).toFixed(2)));
    }
  };

  const buyFullFeast = () => {
    if (count >= 10000) {
      setMultiplier(multiplier * 1.5);
      setCount(parseFloat((count - 10000).toFixed(2)));
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {formatNumber(count.toFixed(2))}</h2>
        <h2>Multiplier: {formatNumber(multiplier.toFixed(3))}x</h2>
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
          <p>1.01x per click</p>
          <button onClick={buyDoubleStuffed}>10 samosas</button>
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

