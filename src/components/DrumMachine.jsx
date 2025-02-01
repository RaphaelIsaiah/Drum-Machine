import { useContext } from "react";
import { DrumContext } from "../context/DrumContext";
import DrumPad from "./drumpad";
import PadDispay from "./PadDisplay";
import VolumeControl from "./VolumeControl";
import { soundBankOne, soundBankTwo } from "../utils/sounds";

const DrumMachine = () => {
  const { power, togglePower, currentBank, toggleSoundBank } =
    useContext(DrumContext);

  const pads = currentBank === "Sound Bank One" ? soundBankOne : soundBankTwo;

  return (
    <div
      id="drum-machine"
      className="bg-gray-800 border-8 border-stone-600 w-full"
    >
      {/* Section 1 */}
      <div className="bg-indigo-950">
        {pads.map((pad) => (
          <DrumPad
            key={pad.keyTrigger}
            keyTrigger={pad.keyTrigger}
            sound={pad.url}
            id={pad.id}
          />
        ))}
      </div>

      {/* Section 2 */}
      <div className="bg-fuchsia-300 ">
        <PadDispay />
        <VolumeControl />

        <div className="bg-blue-900 ">
          <button
            className="bg-green-500 hover:bg-green-700 disabled:opacity-50"
            onClick={toggleSoundBank}
            disabled={!power}
          >
            {currentBank}
          </button>

          <button
            className="bg-blue-500 hover:bg-blue-700 "
            onClick={togglePower}
          >
            {power ? "Power OFF" : "Power ON"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
