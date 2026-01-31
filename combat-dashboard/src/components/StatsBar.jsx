export default function StatsBar({ label, value, color }) {
  return (
    <div className="stat">
      <span>{label}</span>
      <div className="bar-bg">
        <div
          className="bar-fill"
          style={{ width: value + "%", background: color }}
        />
      </div>
    </div>
  );
}
