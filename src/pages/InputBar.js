import { useState } from "react";

export default function InputBar({onAddTask}) {

    const [text, setText] = useState('');
    return (
      <div id="task-input-bar">
        <input 
          id="task-input-bar-field" 
          type="text" 
          placeholder="Add task" 
          value={text} onChange={e => setText(e.target.value)}
          />
        <button className="button" onClick={()=> {
            setText('');
            onAddTask(text);
          }}>
          Add
        </button>
      </div>
    )
  }