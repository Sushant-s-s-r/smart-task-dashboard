# ✅ Smart Task & Productivity Dashboard

> **React · JavaScript · CSS · Local Storage**

A responsive Kanban-style productivity dashboard for managing tasks across three workflow stages — Todo, In Progress, and Done. All data persists in the browser via localStorage, so nothing is lost on refresh.

---

## 🚀 Live Demo

> Add your Vercel/Netlify link here after deployment

---

## ✨ Features

- **Kanban board** — three-column layout: Todo, In Progress, Done
- **Task creation & editing** — title, description, status, and priority
- **Priority levels** — High, Medium, Low with colour-coded badges
- **Status management** — change task status via dropdown on each card
- **Real-time search** — filter tasks by title or description instantly
- **Status filter** — filter by All / Todo / In Progress / Done
- **Stats bar** — live count of tasks in each stage with progress bars
- **Local storage persistence** — data survives page refresh
- **Responsive design** — works on desktop and mobile
- **Smooth animations** — modal slide-in, card hover transitions

---

## 🗂️ Project Structure

```
smart-task-dashboard/
├── src/
│   ├── components/
│   │   ├── Header.jsx        ← Search bar + Add Task button
│   │   ├── StatsBar.jsx      ← Task count stats with progress bars
│   │   ├── FilterBar.jsx     ← Status filter buttons
│   │   ├── TaskBoard.jsx     ← Three-column Kanban board
│   │   ├── TaskCard.jsx      ← Individual task card
│   │   └── TaskModal.jsx     ← Add / Edit task modal
│   ├── utils/
│   │   └── storage.js        ← localStorage read/write helpers
│   ├── App.jsx               ← Root component + state management
│   ├── App.css               ← Full design system & styles
│   └── main.jsx              ← React entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React 18 | Component-based UI, state management |
| JavaScript (ES6+) | Logic, filtering, event handling |
| CSS3 | Custom design system, animations, responsive layout |
| localStorage | Client-side data persistence |
| Vite | Fast development server and build tool |

---

## ⚙️ Setup & Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/Anubhacharchi/smart-task-dashboard.git
cd smart-task-dashboard

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build
```
Output goes to `/dist` — ready to deploy on Vercel, Netlify, or GitHub Pages.

---

## 🚢 Deploy on Vercel (Recommended)

1. Push repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repo
4. Framework: **Vite** (auto-detected)
5. Click **Deploy** — done in ~30 seconds

---

## 🧠 Key Concepts Applied

- **Component-based architecture** — each UI element is an isolated, reusable component
- **Lifting state up** — all task state lives in `App.jsx` and flows down via props
- **Controlled components** — all form inputs are controlled via React state
- **Side effects with useEffect** — localStorage syncs automatically on every state change
- **Derived state** — filtered tasks computed from source array without extra state
- **Prop drilling** — clean data flow between parent and child components

---

## 📄 License

MIT License — free to use and modify with attribution.

---

## 👤 Author

**Anubha Deepti Charchi**  
B.Tech CSE, KIIT University, Bhubaneswar  
[LinkedIn](https://linkedin.com/in/anubha-charchi-258085230) · [GitHub](https://github.com/Anubhacharchi)
