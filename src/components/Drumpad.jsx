import { useEffect, useContext, useRef } from "react";
import PropTypes from "prop-types";
import { DrumContext } from "../context/DrumContext";
import { playSound, handleKeyPress } from "../utils/helpers";

const DrumPad = ({ keyTrigger, sound, id }) => {
  const { power, updateDisplay, volume } = useContext(DrumContext);
  const audioRef = useRef(null);

  const playSoundFunction = () => {
    if (power) {
      audioRef.current.volume = volume; // Adjust volume before playing sound
      playSound(keyTrigger);
      updateDisplay(id);
    }
  };

  const handleKeyPressFunction = (e) => {
    handleKeyPress(e, keyTrigger, playSoundFunction);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPressFunction);

    return () => {
      document.removeEventListener("keydown", handleKeyPressFunction);
    };
  });

  return (
    <div
      className="drum-pad p-4 bg-gray-700 hover:bg-gray-600 text-center rounded cursor-pointer shadow-lg"
      id={id}
      onClick={playSoundFunction}
    >
      {keyTrigger}
      <audio
        ref={audioRef}
        src={sound}
        className="clip"
        id={keyTrigger}
      ></audio>
    </div>
  );
};

DrumPad.propTypes = {
  keyTrigger: PropTypes.string.isRequired,
  sound: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default DrumPad;
