import { useContext } from "react";
import { DrumContext } from "../context/DrumContext";

const PadDisplay = () => {
  const { display, power } = useContext(DrumContext);

  return (
    <div className="">
      <div id="display" className="display p-3 rounded shadow-5xl">
        {power ? display : "---"}
      </div>
    </div>
  );
};

export default PadDisplay;
