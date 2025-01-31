import { DrumProvider } from "./context/DrumProvider";
import DrumMachine from "./components/DrumMachine";
import "./App.css";

function App() {
  return (
    <DrumProvider>
      <DrumMachine />
    </DrumProvider>
  );
}

export default App;
