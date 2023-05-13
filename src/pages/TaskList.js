import {useState} from 'react'

export default function TaskList({tasks, onChangeTask, onDeleteTask}) {
    const taskListItems = tasks.map(task => {
      return (<TaskListItem 
          key={task.id} 
          task={task} 
          onChangeTask={onChangeTask} 
          onDeleteTask={onDeleteTask}
        />)
    });
  
    return (
      <ul id="task-list">
        {taskListItems}
      </ul>
    )
  }
  
  function TaskListItem({task, onChangeTask, onDeleteTask}) {
  
    function toggleMode() {
      setMode(!isEditing);
    }
  
    const [isEditing, setMode] = useState(false);
    const [text, setText] = useState(task.text);
  
    if (isEditing) {
      return (
        <li>
          <input type="text" value={text} placeholder="Add task" onChange={e => setText(e.target.value)}/>
          <button className="button" onClick={()=> {
              onChangeTask({
                id: task.id,
                text: text
              });
              toggleMode();
            }}>Save</button>
          <button className="button" onClick={() => onDeleteTask(task.id)}>Delete</button>
        </li>
      )
    } 
  
    return (
      <li>
        <p>{task.text}</p>
        <button className="button" onClick={toggleMode}>Edit</button>
        <button className="button" onClick={() => onDeleteTask(task.id)}>Delete</button>
      </li>
    )
  }