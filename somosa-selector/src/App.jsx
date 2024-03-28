import "./App.css";
import { useState, useEffect, useRef } from "react";
import clickSound from "./assets/samosaClick.mp3";
import doubleStuffedSound from "./assets/upgradeSound2.mp3";
import partyPackSound from "./assets/upgradeSound2.mp3";
import fullFeastSound from "./assets/upgradeSound2.mp3";
import ConfettiExplosion from "react-confetti-explosion";

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [doubleStuffedCost, setDoubleStuffedCost] = useState(1);
  const [partyPackCost, setPartyPackCost] = useState(2);
  const [fullFeastCost, setFullFeastCost] = useState(3);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiKey, setConfettiKey] = useState(0);
  const [isConfettiRunning, setIsConfettiRunning] = useState(false);
  const appRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (appRef.current) {
        const rect = appRef.current.getBoundingClientRect();
        setAppDimensions({
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [appDimensions, setAppDimensions] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

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

  const triggerConfetti = () => {
    if (!isConfettiRunning) {
      setIsConfettiRunning(true);
      setShowConfetti(true);
      setConfettiKey((prevKey) => prevKey + 1);
      setTimeout(() => {
        setShowConfetti(false);
        setIsConfettiRunning(false);
      }, 2200);
    } else {
      setConfettiKey((prevKey) => prevKey + 1);
    }
  };

  const buyDoubleStuffed = () => {
    if (count >= doubleStuffedCost) {
      setMultiplier(multiplier * 1.1);
      setCount(parseFloat((count - doubleStuffedCost).toFixed(2)));
      setDoubleStuffedCost(doubleStuffedCost + doubleStuffedCost * 0.125);
      playSound(doubleStuffedSound);
      triggerConfetti();
    }
  };

  const buyPartyPack = () => {
    if (count >= partyPackCost) {
      setMultiplier(multiplier * 1.1);
      setCount(parseFloat((count - partyPackCost).toFixed(2)));
      setPartyPackCost(partyPackCost + partyPackCost * 0.5);
      playSound(partyPackSound);
      triggerConfetti();
    }
  };

  const buyFullFeast = () => {
    if (count >= fullFeastCost) {
      setMultiplier(multiplier * 1.25);
      setCount(parseFloat((count - fullFeastCost).toFixed(2)));
      setFullFeastCost(fullFeastCost + fullFeastCost * 0.75);
      playSound(fullFeastSound);
      triggerConfetti();
    }
  };

  return (
    <div className="App" ref={appRef}>
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
      {showConfetti && (
        <ConfettiExplosion
          key={confettiKey}
          confettiSource={{
            x: Math.random() * (appDimensions.width - 200) + appDimensions.left,
            y: Math.random() * (appDimensions.height - 200) + appDimensions.top,
            w: 200,
            h: 200,
          }}
        />
      )}
    </div>
  );
};

export default App;
