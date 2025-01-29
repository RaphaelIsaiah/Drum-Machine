import { useContext } from "react";
import { DrumContext } from "../context/DrumContext";
import DrumPad from "./drumpad";
import SoundBankDisplay from "./SoundBankDisplay";
import PadDispay from "./PadDisplay";
import { soundBankOne, soundBankTwo } from "../utils/sounds";

const DrumMachine = () => {
  const { power, togglePower, currentBank, toggleSoundBank } =
    useContext(DrumContext);

  const pads = currentBank === "Bank One" ? soundBankOne : soundBankTwo;

  return (
    <div id="drum-machine">
      <button onClick={togglePower}>{power ? "Power Off" : "Power On"}</button>
      <div>
        <button onClick={toggleSoundBank} disabled={!power}>
          Toggle Sound Bank
        </button>
        <SoundBankDisplay />
      </div>
      <PadDispay />
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
