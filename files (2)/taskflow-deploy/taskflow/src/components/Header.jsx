export default function Header({ onAdd, search, onSearch }) {
  return (
    <header className="header">
      <h1 className="header-title">Task<span>Flow</span></h1>
      <div className="search-wrap">
        <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          className="search-input"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <button className="btn-add" onClick={onAdd}>
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12h14"/>
        </svg>
        New Task
      </button>
    </header>
  );
}
