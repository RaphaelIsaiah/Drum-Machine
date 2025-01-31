import { useContext } from "react";
import { DrumContext } from "../context/DrumContext";

const PadDispay = () => {
  const { display, power } = useContext(DrumContext);

  return (
    <div id="display" className="text-lg font-bold text-gray-300 mt-4">
      {power ? display : ""}
    </div>
  );
};

export default PadDispay;
