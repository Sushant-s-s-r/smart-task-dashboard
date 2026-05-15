import TaskCard from "./TaskCard";

export default function TaskBoard({ tasks, statuses, onStatusChange, onEdit, onDelete }) {
  return (
    <div className="board">
      {statuses.map((status) => {
        const colTasks = tasks.filter((t) => t.status === status);
        const dotClass = status.replace(" ", "");
        return (
          <div className="column" key={status}>
            <div className="column-header">
              <div className="column-title">
                <span className={`col-dot ${dotClass}`} />
                {status}
              </div>
              <span className="col-count">{colTasks.length}</span>
            </div>
            <div className="column-body">
              {colTasks.length === 0 ? (
                <p className="empty-col">No tasks here</p>
              ) : (
                colTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    statuses={statuses}
                    onStatusChange={onStatusChange}
                    onEdit={onEdit}
                    onDelete={onDelete}
                  />
                ))
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
