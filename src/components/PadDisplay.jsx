import { useContext } from "react";
import { DrumContext } from "../context/DrumContext";

const PadDispay = () => {
  const { display, power } = useContext(DrumContext);

  return <div id="display">{power ? display : ""}</div>;
};

export default PadDispay;
