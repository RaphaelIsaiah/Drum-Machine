import { useState } from "react";
import { DrumContext } from "./DrumContext";
import PropTypes from "prop-types";

// function to provide the context to the app
export const DrumProvider = ({ children }) => {
  const [display, setDisplay] = useState("");
  const [activePad, setActivePad] = useState(null);
  const [power, setPower] = useState(true);
  const [currentBank, setCurrentBank] = useState("Bank One");

  const updateDisplay = (id) => {
    setDisplay(id);
    setActivePad(id);
  };

  const togglePower = () => {
    setPower(!power);
    setDisplay("");
    setActivePad(null);
  };

  const toggleSoundBank = () => {
    if (power) {
      const newBank = currentBank === "Bank One" ? "Bank Two" : "Bank One";
      setCurrentBank(newBank);
    }
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
      }}
    >
      {children}
    </DrumContext.Provider>
  );
};
DrumProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
