import { useEffect, useState } from "react";
import StatsBar from "./StatsBar";

export default function Dashboard({ character }) {
  const [energy, setEnergy] = useState(100);
  const [cooldowns, setCooldowns] = useState({});

  useEffect(() => {
    if (character) {
      setEnergy(character.energy);
      setCooldowns({});
    }
  }, [character]);

  if (!character) return <p>Select a character</p>;

  const useAbility = (ab) => {
    if (energy < ab.cost || cooldowns[ab.name]) return;

    setEnergy(e => e - ab.cost);
    setCooldowns(c => ({ ...c, [ab.name]: 100 }));

    const start = Date.now();
    const timer = setInterval(() => {
      const p = 100 - ((Date.now() - start) / ab.cd) * 100;
      setCooldowns(c => ({ ...c, [ab.name]: Math.max(p, 0) }));
      if (p <= 0) clearInterval(timer);
    }, 100);
  };

  return (
    <div className="dashboard">
      <h2>{character.name}</h2>

      <StatsBar label="Power" value={character.power} color="#ef4444" />
      <StatsBar label="Speed" value={character.speed} color="#3b82f6" />
      <StatsBar label="Energy" value={energy} color="#22c55e" />

      <div className="abilities">
        {character.abilities.map(ab => (
          <div key={ab.name} className="ability">
            <button
              onClick={() => useAbility(ab)}
              disabled={cooldowns[ab.name] > 0}
            >
              {ab.name} (-{ab.cost})
            </button>
            {cooldowns[ab.name] > 0 && (
              <div className="cd">
                <div style={{ width: cooldowns[ab.name] + "%" }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


