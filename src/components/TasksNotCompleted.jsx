//prima importo l'array tasks:
import tasks from '../data/tasks';

function TasksNotCompleted() {
    let tasksBacklog = [];
    let tasksInProgress = [];

    tasksBacklog = tasks.filter((element) => {
        return element.state.includes("backlog".toLowerCase())
    }).map((element) => {
        return <li key={element.id}>
            <h3>{element.title}</h3>
            <p>Priority: {element.priority}</p>
            <p>Est. time {element.estimatedTime}</p>
        </li>
    });

    tasksInProgress = tasks.filter((element) => {
        return element.state.includes("in_progress".toLowerCase())
    }).map((element) => {
        return <li key={element.id}>
            <h3>{element.title}</h3>
            <p>Priority: {element.priority}</p>
            <p>Est. time {element.estimatedTime}</p>
        </li>
    });

    const mergedTasks = tasksBacklog.concat(tasksInProgress);
    
    const template = <>
        <h2>Current Tasks ({mergedTasks.length})</h2>
        <ul>{mergedTasks}</ul>
    </>
    return template;
}

export default TasksNotCompleted;