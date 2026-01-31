import { useState } from "react";
import { characters } from "./data/characters";
import CharacterCard from "./components/CharacterCard";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="app">
      <h1>⚔ Character Combat Dashboard</h1>

      <div className="cards">
        {characters.map(c => (
          <CharacterCard
            key={c.id}
            character={c}
            onSelect={setSelected}
          />
        ))}
      </div>

      <Dashboard character={selected} />
    </div>
  );
}

