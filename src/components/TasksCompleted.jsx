// Prima importo l'array tasks:
import tasks from '../data/tasks';

function TasksCompleted() {
    let tasksCompleted = [];    //array inizializzato a vuoto

    // Filtro prima le tasks che contengono nella chiave status la stringa "completed"
    tasksCompleted = tasks.filter((element) => {
        return element.state === "completed".toLowerCase();
    }).map((element) => {
        // Ritorno l'array filtrato con l'aggiunta di tag html
        return <li key={element.id}>
            <h3>{element.title}<span className="state-completed">{element.state}</span></h3>
            <p>Priority: {element.priority}</p>
            <p>Est. time {element.estimatedTime}</p>
        </li>
    });

    // Ritorno un template dell'array con un h2 e un ul e all'interno gli <li> contententi le tasks filtrate
    tasksCompleted =
        <>
            <h2>Completed Tasks ({tasksCompleted.length})</h2>
            <ul>{tasksCompleted}</ul>
        </>
    return tasksCompleted;
}

export default TasksCompleted;