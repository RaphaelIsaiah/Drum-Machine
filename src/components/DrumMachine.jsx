import { useContext } from "react";
import { DrumContext } from "../context/DrumContext";
import DrumPad from "./drumpad";
import { soundBankOne, soundBankTwo } from "../utils/sounds";

const DrumMachine = () => {
  const { display, power, togglePower, currentBank, toggleSoundBank } =
    useContext(DrumContext);

  const pads = currentBank === "Bank One" ? soundBankOne : soundBankTwo;

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <button onClick={togglePower}>{power ? "Power Off" : "Power On"}</button>
      <button onClick={toggleSoundBank}>Toggle Sound Bank</button>
      <div className="pads">
        {pads.map((pad) => (
          <DrumPad
            key={pad.keyTrigger}
            keyTrigger={pad.keyTrigger}
            sound={pad.url}
            id={pad.id}
          />
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;
