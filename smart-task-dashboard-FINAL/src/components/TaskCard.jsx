export default function TaskCard({ task, statuses, onStatusChange, onEdit, onDelete }) {
  const date = new Date(task.createdAt).toLocaleDateString("en-US", {
    month: "short", day: "numeric"
  });

  return (
    <div className="task-card">
      <div className="task-card-top">
        <span className="task-title">{task.title}</span>
        <div className="task-actions">
          <button className="icon-btn" onClick={() => onEdit(task)} title="Edit">
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
          </button>
          <button className="icon-btn del" onClick={() => onDelete(task.id)} title="Delete">
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6l-1 14H6L5 6"/>
              <path d="M10 11v6M14 11v6"/>
              <path d="M9 6V4h6v2"/>
            </svg>
          </button>
        </div>
      </div>

      {task.description && (
        <p className="task-desc">{task.description}</p>
      )}

      <div className="task-footer">
        <span className={`priority-badge ${task.priority}`}>{task.priority}</span>
        <select
          className="status-select"
          value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value)}
          onClick={(e) => e.stopPropagation()}
        >
          {statuses.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <span className="task-date">{date}</span>
      </div>
    </div>
  );
}
