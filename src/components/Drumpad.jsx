import { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { DrumContext } from "../context/DrumContext";
import { playSound, handleKeyPress } from "../utils/helpers";

const DrumPad = ({ keyTrigger, sound, id }) => {
  const { power, updateDisplay } = useContext(DrumContext);

  const playSoundFunction = () => {
    if (power) {
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
    <div className="drum-pad" id={id} onClick={playSoundFunction}>
      {keyTrigger}
      <audio src={sound} className="clip" id={keyTrigger}></audio>
    </div>
  );
};

DrumPad.propTypes = {
  keyTrigger: PropTypes.string.isRequired,
  sound: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default DrumPad;