import { useState } from "react";
import { DrumContext } from "./DrumContext";
import PropTypes from "prop-types";

// function to provide the context to the app
export const DrumProvider = ({ children }) => {
  const [display, setDisplay] = useState("Power ON");
  const [activePad, setActivePad] = useState(null);
  const [power, setPower] = useState(true);
  const [currentBank, setCurrentBank] = useState("Sound Bank One");
  const [volume, setVolume] = useState(0.5);
  const [timeoutId, setTimeoutId] = useState(null);

  const updateDisplay = (id) => {
    setDisplay(id);
    setActivePad(id);
  };

  const togglePower = () => {
    setPower(!power);
    setDisplay("Power ON");
    setActivePad(null);
  };

  const toggleSoundBank = () => {
    if (power) {
      const newBank =
        currentBank === "Sound Bank One" ? "Sound Bank Two" : "Sound Bank One";
      setCurrentBank(newBank);
      setDisplay(newBank);
    }
  };

  const adjustVolume = (newVolume) => {
    setVolume(newVolume);
    setDisplay(`Volume: ${Math.round(newVolume * 100)}`);

    // Clear any existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set a new timeout to clear the display
    const id = setTimeout(() => {
      // updateDisplay(activePad);
      setDisplay("");
    }, 1000);

    setTimeoutId(id);
  };

  return (
    <DrumContext.Provider
      value={{
        display,
        updateDisplay,
        activePad,
        power,
        togglePower,
        currentBank,
        toggleSoundBank,
        volume,
        adjustVolume,
      }}
    >
      {children}
    </DrumContext.Provider>
  );
};
DrumProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
