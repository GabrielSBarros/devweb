import "./App.css";
import SpellSpaces from "./components/SpellSpaces";

function App() {
  return (
    <div className="App">
      <SpellSpaces level={2} maxSpaces={3} availableSpaces={2} />
    </div>
  );
}

export default App;
