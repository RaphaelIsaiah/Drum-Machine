import { useContext } from "react";
import { DrumContext } from "../context/DrumContext";

const PadDispay = () => {
  const { display, power } = useContext(DrumContext);

  return (
    <div
      id="display"
      className="text-xl font-bold text-gray-300 bg-amber-700
      flex items-center justify-center rounded text-center"
    >
      {power ? display : "---"}
    </div>
  );
};

export default PadDispay;
