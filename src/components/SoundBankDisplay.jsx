import { useContext } from "react";
import { DrumContext } from "../context/DrumContext";

const SoundBankDisplay = () => {
  const { currentBank, power } = useContext(DrumContext);

  return <div id="sound-bank-display">{power ? currentBank : ""}</div>;
};

export default SoundBankDisplay;
