import { createContext, useState } from "react";
import PropTypes from "prop-types";

// create the context
export const DrumContext = createContext();

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
    setDisplay(power ? "Power Off" : "Power On");
  };

  const toggleSoundBank = () => {
    const newBank = currentBank === "Bank One" ? "Bank Two" : "Bank One";
    setCurrentBank(newBank);
    setDisplay(newBank);
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
