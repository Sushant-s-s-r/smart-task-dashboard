export default function FilterBar({ filter, setFilter, statuses }) {
  const options = ["All", ...statuses];
  return (
    <div className="filter-bar">
      {options.map((s) => (
        <button
          key={s}
          className={`filter-btn ${filter === s ? "active" : ""}`}
          onClick={() => setFilter(s)}
        >
          {s}
        </button>
      ))}
    </div>
  );
}
