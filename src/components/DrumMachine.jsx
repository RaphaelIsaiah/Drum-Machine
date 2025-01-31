import { useContext } from "react";
import { DrumContext } from "../context/DrumContext";
import DrumPad from "./drumpad";
import SoundBankDisplay from "./SoundBankDisplay";
import PadDispay from "./PadDisplay";
import VolumeControl from "./VolumeControl";
import { soundBankOne, soundBankTwo } from "../utils/sounds";

const DrumMachine = () => {
  const { power, togglePower, currentBank, toggleSoundBank } =
    useContext(DrumContext);

  const pads = currentBank === "Bank One" ? soundBankOne : soundBankTwo;

  return (
    <div
      id="drum-machine"
      className="flex flex-col items-center p-4 bg-gray-800 text-white min-h-screen"
    >
      <h1 className="text-3xl font-bold mb-4">Drum Machine</h1>

      <button
        className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mb-4"
        onClick={togglePower}
      >
        {power ? "Power Off" : "Power On"}
      </button>

      <div className="flex flex-col items-center mb-4">
        <button
          className="bg-green-500 hover:bg-green-700 font-bold py-2 px-4 rounded mb-2 disabled:opacity-50"
          onClick={toggleSoundBank}
          disabled={!power}
        >
          Toggle Sound Bank
        </button>
        <SoundBankDisplay />
      </div>
      <VolumeControl />
      <PadDispay />
      <div className="grid grid-cols-3 gap-4 mt-4">
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
