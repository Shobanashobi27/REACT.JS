export default function CharacterCard({ character, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(character)}>
      <h3>{character.name}</h3>
      <p>⚡ Power: {character.power}</p>
    </div>
  );
}
