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
    <div className="bg-roseRed rounded cursor-pointer shadow-3xl">
      <div
        className="drum-pad bg-desertSun active:scale-97 active:translate-0.5 px-3 py-5 rounded text-darkBlue"
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
    </div>
  );
};

DrumPad.propTypes = {
  keyTrigger: PropTypes.string.isRequired,
  sound: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default DrumPad;
