import { useState, useEffect } from "react";
import TaskBoard from "./components/TaskBoard";
import Header from "./components/Header";
import TaskModal from "./components/TaskModal";
import StatsBar from "./components/StatsBar";
import FilterBar from "./components/FilterBar";
import { loadTasks, saveTasks } from "./utils/storage";
import "./App.css";

const STATUSES = ["Todo", "In Progress", "Done"];

export default function App() {
  const [tasks, setTasks] = useState(() => loadTasks());
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      ...task,
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const updateTask = (id, updates) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const openEdit = (task) => {
    setEditingTask(task);
    setModalOpen(true);
  };

  const handleModalSubmit = (data) => {
    if (editingTask) {
      updateTask(editingTask.id, data);
    } else {
      addTask(data);
    }
    setModalOpen(false);
    setEditingTask(null);
  };

  const filteredTasks = tasks.filter((t) => {
    const matchStatus = filter === "All" || t.status === filter;
    const matchSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      (t.description || "").toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="app">
      <Header
        onAdd={() => { setEditingTask(null); setModalOpen(true); }}
        search={search}
        onSearch={setSearch}
      />
      <StatsBar tasks={tasks} />
      <FilterBar filter={filter} setFilter={setFilter} statuses={STATUSES} />
      <TaskBoard
        tasks={filteredTasks}
        statuses={STATUSES}
        onStatusChange={(id, status) => updateTask(id, { status })}
        onEdit={openEdit}
        onDelete={deleteTask}
      />
      {modalOpen && (
        <TaskModal
          task={editingTask}
          onSubmit={handleModalSubmit}
          onClose={() => { setModalOpen(false); setEditingTask(null); }}
        />
      )}
    </div>
  );
}
