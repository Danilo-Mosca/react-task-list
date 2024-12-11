//prima importo l'array tasks:
import tasks from '../data/tasks';
/* Importo lo useState direttamente da react */
import { useState } from "react";

function TasksNotCompleted() {
    //configuro lo state iniziale
    const [status, setState] = useState("state-inprogress");
    // arrow function che andrà a settare lo state
    const changeState = () => {
        setState(mergedTasks.state === "in_progress" ? "state-inprogress" : "state-backlog");
    }
    
    
    
    let tasksBacklog = [];
    let tasksInProgress = [];

    tasksBacklog = tasks.filter((element) => {
        return element.state.includes("backlog".toLowerCase())
    }).map((element) => {
        return <li key={element.id}>
            <h3>{element.title}<span className={status}>{element.state}</span></h3>
            <p>Priority: {element.priority}</p>
            <p>Est. time {element.estimatedTime}</p>
        </li>
    });

    tasksInProgress = tasks.filter((element) => {
        return element.state.includes("in_progress".toLowerCase())
    }).map((element) => {
        return <li key={element.id}>
            <h3>{element.title}<span className="state-backlog">{element.state}</span></h3>
            <p>Priority: {element.priority}</p>
            <p>Est. time {element.estimatedTime}</p>
        </li>
    });

    let mergedTasks = tasksBacklog.concat(tasksInProgress);

    mergedTasks =
        <>
            <h2>Current Tasks ({mergedTasks.length})</h2>
            <ul>{mergedTasks}</ul>
        </>
    return mergedTasks;
}

export default TasksNotCompleted;