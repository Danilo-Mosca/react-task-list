//prima importo l'array tasks:
import tasks from '../data/tasks';

function TasksCompleted() {
    let tasksCompleted = [];
    tasksCompleted = tasks.filter((element) => {
        return element.state.includes("completed".toLowerCase())
    }).map((element) => {
        return <li key={element.id}>
            <h3>{element.title}</h3>
            <p>Priority: {element.priority}</p>
            <p>Est. time {element.estimatedTime}</p>
        </li>
    });

    tasksCompleted = <>
        <h2>Completed Tasks ({tasksCompleted.length})</h2>
        <ul>{tasksCompleted}</ul>
    </>
    return tasksCompleted;
}

export default TasksCompleted;