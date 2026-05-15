const KEY = "taskflow_tasks";

export const loadTasks = () => {
  try {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : defaultTasks();
  } catch {
    return defaultTasks();
  }
};

export const saveTasks = (tasks) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(tasks));
  } catch (e) {
    console.error("Failed to save tasks:", e);
  }
};

const defaultTasks = () => [
  {
    id: 1,
    title: "Set up project structure",
    description: "Initialize React app with folder structure and dependencies.",
    status: "Done",
    priority: "High",
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
  },
  {
    id: 2,
    title: "Build task card component",
    description: "Create reusable card with status, priority, and actions.",
    status: "Done",
    priority: "High",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: 3,
    title: "Implement local storage",
    description: "Persist task data across browser sessions using localStorage.",
    status: "In Progress",
    priority: "Medium",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 4,
    title: "Add search and filter",
    description: "Filter tasks by status and search by keyword.",
    status: "In Progress",
    priority: "Medium",
    createdAt: new Date().toISOString(),
  },
  {
    id: 5,
    title: "Mobile responsiveness",
    description: "Optimize layout for small screen sizes.",
    status: "Todo",
    priority: "Low",
    createdAt: new Date().toISOString(),
  },
  {
    id: 6,
    title: "Write README and documentation",
    description: "Document setup, features, and usage instructions.",
    status: "Todo",
    priority: "Low",
    createdAt: new Date().toISOString(),
  },
];
