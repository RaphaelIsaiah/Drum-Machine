import { useContext } from "react";
import { DrumContext } from "../context/DrumContext";
import PadDisplay from "./PadDisplay";
import DrumsPad from "./DrumsPad";
import VolumeControl from "./VolumeControl";
import { soundBankOne, soundBankTwo } from "../utils/sounds";

const DrumMachine = () => {
  const { power, togglePower, currentBank, toggleSoundBank } =
    useContext(DrumContext);

  const pads = currentBank === "Sound Bank One" ? soundBankOne : soundBankTwo;

  return (
    <div
      id="drum-machine"
      className="w-full p-4 md:flex md:flex-row-reverse md:gap-5
      md:justify-center md:items-center shadow-4xl rounded"
    >
      {/* Section 2 */}
      <div className=" md:w-2/5">
        <div className="buttons flex flex-wrap md:flex-col-reverse lg:flex-row justify-end gap-3 lg:gap-6">
          <button
            className="btns bg-roseRed text-champagne hover:bg-green-700 disabled:opacity-80 p-2
            xl:p-4 rounded md:w-[100%] outline-none
            lg:w-fit lg:shadow-5xl shadow-6xl cursor-pointer hover:scale-103 disabled:scale-100"
            onClick={toggleSoundBank}
            disabled={!power}
          >
            {currentBank}
          </button>

          <button
            className="btns bg-darkBlue text-champagne hover:bg-blue-700 p-2 xl:p-4
             rounded md:w-[100%] lg:w-fit lg:shadow-5xl shadow-6xl outline-none
            cursor-pointer hover:scale-103"
            onClick={togglePower}
          >
            {power ? "Power OFF" : "Power ON"}
          </button>
        </div>
        <VolumeControl />
        <PadDisplay />
      </div>

      {/* Section 1 */}
      <div className="md:w-3/5 mt-3 md:mt-0">
        <div className="d-pads grid grid-cols-3 gap-1 md:gap-1.5 select-none">
          {pads.map((pad) => (
            <DrumsPad
              key={pad.keyTrigger}
              keyTrigger={pad.keyTrigger}
              sound={pad.url}
              id={pad.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
