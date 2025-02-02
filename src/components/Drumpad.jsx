import { useEffect, useContext, useRef } from "react";
import PropTypes from "prop-types";
import { DrumContext } from "../context/DrumContext";
import { playSound, handleKeyPress } from "../utils/helpers";

const DrumPad = ({ keyTrigger, sound, id }) => {
  const { power, updateDisplay, volume } = useContext(DrumContext);
  const audioRef = useRef(null);
  const drumPadRef = useRef(null);

  const playSoundFunction = () => {
    if (power) {
      audioRef.current.volume = volume; // Adjust volume before playing sound
      playSound(keyTrigger);
      updateDisplay(id);
      animatePad();
    } else {
      animatePadOff();
    }
  };

  const handleKeyPressFunction = (e) => {
    handleKeyPress(e, keyTrigger, playSoundFunction);
  };

  const animatePad = () => {
    drumPadRef.current.classList.add("translate-0.5", "scale-97");

    setTimeout(() => {
      drumPadRef.current.classList.remove("translate-0.5", "scale-97");
    }, 100);
  };

  const animatePadOff = () => {
    drumPadRef.current.classList.add("scale-103");

    setTimeout(() => {
      drumPadRef.current.classList.remove("scale-103");
    }, 100);
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
        ref={drumPadRef}
        className="drum-pad bg-desertSun px-3 py-5 rounded text-darkBlue"
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
