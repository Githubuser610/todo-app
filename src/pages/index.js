import { Inter } from 'next/font/google'
import { useState } from 'react'
import TaskList from './TaskList.js'
import InputBar from './InputBar.js'

const inter = Inter({ subsets: ['latin'] })

const initialTasks = [
  {
    id: 1,
    text: "Program this todo app"
  },
  {
    id: 2,
    text: "A task"
  }
]

let nextId = 3;

export default function TaskApp() {

  const [tasks, setTasks] = useState(initialTasks);
  
  function addTask(text) {
    setTasks([
      ...tasks, 
      {
        id: nextId++,
        text: text
      }
    ]);
  }

  function changeTask(editedTask) {
    setTasks(tasks.map(task => {
      if (task.id === editedTask.id) {
        return editedTask;
      }
      return task;
    }))
    
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }


  return (
    <div id="task-app">
       <InputBar onAddTask={addTask}/>
       <TaskList 
        tasks={tasks} 
        onChangeTask={changeTask} 
        onDeleteTask={deleteTask}
        />
    </div>
  )
}




