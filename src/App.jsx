import { DrumProvider } from "./context/DrumProvider";
import DrumMachine from "./components/DrumMachine";
import "./App.css";

function App() {
  return (
    <div className="bg-blue-400 min-h-screen flex items-center justify-center
     px-5 font-display text-center font-bold text-xl text-sky-100">
      <DrumProvider>
        <DrumMachine />
      </DrumProvider>
    </div>
  );
}

export default App;
