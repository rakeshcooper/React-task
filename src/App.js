import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"
function App() {
  const [tasks,setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'March 1st at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Meeting at school',
        day: 'March 3rd at 1:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Food Shopping',
        day: 'March 3rd at 11:00pm',
        reminder: false,
      }
  ])
// delete tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }


  // Toggle reminder

  return (
    <div className="container">
      <Header title="Hello All" />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete= {deleteTask} />
      : "No task to show"}
    </div>
    
  );
}

export default App;
