import { useContext } from "react";
import { DrumContext } from "../context/DrumContext";

const SoundBankDisplay = () => {
  const { currentBank, power } = useContext(DrumContext);

  return (
    <div
      id="sound-bank-display"
      className="text-lg font-bold text-gray-300 mt-2"
    >
      {power ? currentBank : ""}
    </div>
  );
};

export default SoundBankDisplay;
