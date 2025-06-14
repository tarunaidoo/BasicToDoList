import React, {useState} from 'react';


function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTasks] = useState("");

    function handleInputChange(event){
        setNewTasks(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTasks("")
        }
        else{
            alert("Fill in task field to add.")
        }
        
    }

    function deleteTask(idx){
        const updatedTasks = tasks.filter((_, i) => i !== idx);
        setTasks(updatedTasks);
    }

    function moveTaskUp(idx){
        if(idx > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[idx],updatedTasks[idx-1]] = [updatedTasks[idx-1],updatedTasks[idx]]
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(idx){
        if(idx < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[idx],updatedTasks[idx+1]] = [updatedTasks[idx+1],updatedTasks[idx]]
            setTasks(updatedTasks)
        }
    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}/>
                <button className="add-btn" onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-btn" onClick={() => moveTaskUp(index)}>⬆️</button>
                        <button className="move-btn" onClick={() => moveTaskDown(index)}>⬇️</button>

                    </li>
                )}
            </ol>

        </div>

    );

}

export default ToDoList;