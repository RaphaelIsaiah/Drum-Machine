import { useContext } from "react";
import { DrumContext } from "../context/DrumContext";

const PadDispay = () => {
  const { display, power } = useContext(DrumContext);

  return (
    <div
      id="display"
      className="bg-amber-700"
    >
      {power ? display : "---"}
    </div>
  );
};

export default PadDispay;
