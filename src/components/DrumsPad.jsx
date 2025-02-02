import { useEffect, useContext, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import { DrumContext } from "../context/DrumContext";
import { playSound, handleKeyPress } from "../utils/helpers";

const DrumsPad = ({ keyTrigger, sound, id }) => {
  const { power, updateDisplay, volume } = useContext(DrumContext);
  const audioRef = useRef(null);
  const drumsPadRef = useRef(null);

  const playSoundFunction = useCallback(() => {
    if (power) {
      audioRef.current.volume = volume; // Adjust volume before playing sound
      playSound(keyTrigger);
      updateDisplay(id);
      animatePad();
    } else {
      animatePadOff();
    }
  }, [power, volume, keyTrigger, id, updateDisplay]);

  const handleKeyPressFunction = useCallback(
    (e) => {
      handleKeyPress(e, keyTrigger, playSoundFunction);
    },
    [keyTrigger, playSoundFunction]
  );

  const animatePad = () => {
    drumsPadRef.current.classList.add("translate-0.5", "scale-97");

    setTimeout(() => {
      drumsPadRef.current.classList.remove("translate-0.5", "scale-97");
    }, 100);
  };

  const animatePadOff = () => {
    drumsPadRef.current.classList.add("scale-103");

    setTimeout(() => {
      drumsPadRef.current.classList.remove("scale-103");
    }, 100);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPressFunction);

    return () => {
      document.removeEventListener("keydown", handleKeyPressFunction);
    };
  }, [handleKeyPressFunction]);

  return (
    <div className="bg-roseRed rounded cursor-pointer shadow-3xl">
      <div
        ref={drumsPadRef}
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

DrumsPad.propTypes = {
  keyTrigger: PropTypes.string.isRequired,
  sound: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default DrumsPad;
