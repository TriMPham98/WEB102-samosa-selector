import "./App.css";
import { useState } from "react";
import clickSound from "./assets/samosaClick.mp3";
import doubleStuffedSound from "./assets/upgradeSound2.mp3";
import partyPackSound from "./assets/upgradeSound2.mp3";
import fullFeastSound from "./assets/upgradeSound2.mp3";

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [doubleStuffedCost, setDoubleStuffedCost] = useState(25);
  const [partyPackCost, setPartyPackCost] = useState(1000);
  const [fullFeastCost, setFullFeastCost] = useState(100000);

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const playSound = (soundPath) => {
    const sound = new Audio(soundPath);
    sound.volume = 0.25;
    sound.play();
  };

  const updateCount = () => {
    setCount(parseFloat((count + multiplier).toFixed(2)));
    playSound(clickSound);
  };

  const buyDoubleStuffed = () => {
    if (count >= doubleStuffedCost) {
      setMultiplier(multiplier * 1.1);
      setCount(parseFloat((count - doubleStuffedCost).toFixed(2)));
      setDoubleStuffedCost(doubleStuffedCost + doubleStuffedCost * 0.125);
      playSound(doubleStuffedSound);
    }
  };

  const buyPartyPack = () => {
    if (count >= partyPackCost) {
      setMultiplier(multiplier * 1.1);
      setCount(parseFloat((count - partyPackCost).toFixed(2)));
      setPartyPackCost(partyPackCost + partyPackCost * 0.5);
      playSound(partyPackSound);
    }
  };

  const buyFullFeast = () => {
    if (count >= fullFeastCost) {
      setMultiplier(multiplier * 1.25);
      setCount(parseFloat((count - fullFeastCost).toFixed(2)));
      setFullFeastCost(fullFeastCost + fullFeastCost * 0.75);
      playSound(fullFeastSound);
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
          width={420}
          alt="Samosa"
          onClick={updateCount}></img>
      </div>
      <div className="container">
        <div className="upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>1.05x per click</p>
          <button
            className={count >= doubleStuffedCost ? "upgrade-sufficient" : ""}
            onClick={buyDoubleStuffed}>
            {formatNumber(doubleStuffedCost.toFixed(2))} samosas
          </button>
        </div>
        <div className="upgrade">
          <h3>Party Pack 🎉</h3>
          <p>1.10x per click</p>
          <button
            className={count >= partyPackCost ? "upgrade-sufficient" : ""}
            onClick={buyPartyPack}>
            {formatNumber(partyPackCost.toFixed(2))} samosas
          </button>
        </div>
        <div className="upgrade">
          <h3>Full Feast 🧑🏼‍🍳</h3>
          <p>1.25x per click</p>
          <button
            className={count >= fullFeastCost ? "upgrade-sufficient" : ""}
            onClick={buyFullFeast}>
            {formatNumber(fullFeastCost.toFixed(2))} samosas
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
