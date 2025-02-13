// src/components/ToggleButton.js
import React from "react";

const ToggleButton = ({ darkMode, toggleDarkMode }) => {
  return (
    <button onClick={toggleDarkMode} className="toggle-button">
      {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default ToggleButton;