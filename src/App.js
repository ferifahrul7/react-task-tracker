import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
function App() {
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


  return (
    <div className='container border-4 rounded-xl border-indigo-300'>
      <Header title='Task Tracker' />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : "no task to show"}
    </div>
  );
}

export default App;
