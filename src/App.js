import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Halo React 1",
      day: "Des 7th at 2.30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Halo Express 2",
      day: "Des 8th at 2.30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Halo Next 3",
      day: "Des 9th at 2.30pm",
      reminder: true,
    },
  ]);

  // DeleteTask
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // addTask
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks,newTask])
  }

  // ToggleReminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
      ? { ...task, reminder: !task.reminder } : task
    )
    )
  }


  return (
    <div className='container border-4 rounded-xl border-indigo-300'>
      <Header title='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      { showAddTask ? <AddTask onAdd={addTask}/> : ""}
      {tasks.length > 0
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        : (
          <div className='text-center py-5'>No task to show</div>
        )}
    </div>
  );
}

export default App;
