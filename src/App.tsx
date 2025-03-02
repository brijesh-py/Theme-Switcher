import { useEffect, useState } from "react";
import "./App.css";

interface ThemeType {
  isOne: boolean;
  onToggle: () => void;
  label: string;
}

function Theme({ isOne, onToggle = () => {}, label = "" }: ThemeType) {
  const root = window.document.documentElement;
  root.classList.remove("light", "dark");

  useEffect(() => {
    if (isOne) root.dataset.theme = "dark";
    else root.dataset.theme = "light";
  }, [root, isOne]);

  return (
    <div className="theme-switcher">
      <label>
        <input
          type="checkbox"
          checked={isOne}
          onChange={onToggle}
          role="Theme"
          aria-checked={isOne}
        />
        <span className="slider"></span>
      <span className="theme-label">
        {label}: {isOne ? "Dark" : "Light"}
      </span>
      </label>
    </div>
  );
}

function App() {
  const [isOn, setIsOn] = useState(false);

  function handleToggle() {
    setIsOn(!isOn);
  }

  return (
    <>
      <Theme isOne={isOn} onToggle={handleToggle} label="Theme" />
    </>
  );
}

export default App;
