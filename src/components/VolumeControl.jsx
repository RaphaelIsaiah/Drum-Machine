import { useContext } from "react";
import { DrumContext } from "../context/DrumContext";

const VolumeControl = () => {
  const { volume, adjustVolume, power } = useContext(DrumContext);

  const handleVolumeChange = (e) => {
    adjustVolume(e.target.value);
  };

  return (
    <div id="volume-control">
      <label htmlFor="volume-slider">Volume</label>
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
      />
    </div>
  );
};

export default VolumeControl;
