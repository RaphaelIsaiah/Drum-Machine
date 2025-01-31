import { useContext } from "react";
import { DrumContext } from "../context/DrumContext";

const VolumeControl = () => {
  const { volume, adjustVolume, power } = useContext(DrumContext);

  const handleVolumeChange = (e) => {
    adjustVolume(e.target.value);
  };

  return (
    <div id="volume-control" className="my-4">
      <label
        htmlFor="volume-slider"
        className="block text-sm font-medium text-gray-300 mb-2"
      >
        Volume
      </label>
      <input
        type="range"
        name="volume-slider"
        id="volume-slider"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        disabled={!power}
        className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};

export default VolumeControl;
