import { DrumProvider } from "./context/DrumProvider";
import DrumMachine from "./components/DrumMachine";
import "./App.css";

function App() {
  return (
    <div
      className="bg-champagne min-h-screen flex items-center justify-center
     px-5 font-display text-center font-bold text-xl uppercase text-roseRed"
    >
      <DrumProvider>
        <DrumMachine />
      </DrumProvider>
    </div>
  );
}

export default App;
