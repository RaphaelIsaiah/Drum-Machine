// Desc: Helper functions for the app

// Function to play sound
export const playSound = (keyTrigger) => {
  const audio = document.getElementById(keyTrigger);
  if (audio) {
    audio.currentTime = 0; // reset audio to the beginning
    audio.play();
  }
};

// Function to handle key press
export const handleKeyPress = (e, keyTrigger, playSoundFunction) => {
  if (e.key.toUpperCase() === keyTrigger) {
    playSoundFunction();
  }
};
