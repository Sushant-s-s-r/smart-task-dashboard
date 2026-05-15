export default function StatsBar({ tasks }) {
  const total = tasks.length;
  const todo = tasks.filter((t) => t.status === "Todo").length;
  const inprog = tasks.filter((t) => t.status === "In Progress").length;
  const done = tasks.filter((t) => t.status === "Done").length;
  const donePercent = total ? Math.round((done / total) * 100) : 0;

  return (
    <div className="stats-bar">
      <div className="stat-card">
        <span className="stat-label">Total Tasks</span>
        <span className="stat-value total">{total}</span>
        <div className="stat-bar">
          <div className="stat-bar-fill" style={{ width: "100%", background: "#3a3a4a" }} />
        </div>
      </div>
      <div className="stat-card">
        <span className="stat-label">Todo</span>
        <span className="stat-value todo">{todo}</span>
        <div className="stat-bar">
          <div className="stat-bar-fill" style={{ width: total ? `${(todo/total)*100}%` : "0%", background: "var(--todo)" }} />
        </div>
      </div>
      <div className="stat-card">
        <span className="stat-label">In Progress</span>
        <span className="stat-value prog">{inprog}</span>
        <div className="stat-bar">
          <div className="stat-bar-fill" style={{ width: total ? `${(inprog/total)*100}%` : "0%", background: "var(--inprogress)" }} />
        </div>
      </div>
      <div className="stat-card">
        <span className="stat-label">Completed</span>
        <span className="stat-value done">{done}</span>
        <div className="stat-bar">
          <div className="stat-bar-fill" style={{ width: `${donePercent}%`, background: "var(--done)" }} />
        </div>
      </div>
    </div>
  );
}
