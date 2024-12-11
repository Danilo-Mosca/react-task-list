//prima importo l'array tasks:
import tasks from '../data/tasks';

function TasksCompleted() {
    let tasksCompleted = [];
    tasksCompleted = tasks.filter((element) => {
        return element.state.includes("completed")
    }).map((element) => {
        return <li key={element.id}>{element.title}</li>
    });
}

export default TasksCompleted;