import { DrumProvider } from "./context/DrumProvider";
import DrumMachine from "./components/DrumMachine";
import "./App.css";

function App() {
  return (
    <DrumProvider>
      <h1>Drum Machine</h1>
      <DrumMachine />
    </DrumProvider>
  );
}

export default App;
