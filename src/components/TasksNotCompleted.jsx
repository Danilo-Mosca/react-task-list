// Prima importo l'array tasks:
import tasks from '../data/tasks';


/* Funzione che ritorna l'array dei task filtrato con gli elementi che al suo interno contengono la chiave "state" impostata a "in_progress" o "backlog" */
function TasksNotCompleted() {
    let tasksBacklog = [];      //array inizializzato a vuoto
    let tasksInProgress = [];   //array inizializzato a vuoto

    // Filtro prima le tasks che contengono nella chiave status la stringa "in_progress"
    tasksBacklog = tasks.filter((element) => {
        return element.state.includes("backlog".toLowerCase())
    }).map((element) => {
        return <li key={element.id}>
            <h3>{element.title}<span className={setClassStatus(element.state)}>{element.state}</span></h3>
            <p>Priority: {element.priority}</p>
            <p>Est. time {element.estimatedTime}</p>
        </li>
    });

    // Poi filtro le tasks che contengono nella chiave status la stringa "in_progress"
    tasksInProgress = tasks.filter((element) => {
        return element.state.includes("in_progress".toLowerCase())
    }).map((element) => {
        // Ritorno l'array filtrato con l'aggiunta di tag html
        return <li key={element.id}>
            <h3>{element.title}<span className={setClassStatus(element.state)}>{element.state}</span></h3>
            <p>Priority: {element.priority}</p>
            <p>Est. time {element.estimatedTime}</p>
        </li>
    });

    // Concateno i due array in un unico array mergedTasks
    let mergedTasks = tasksBacklog.concat(tasksInProgress);

    // Ritorno un template dell'array con un h2 e un ul e all'interno gli <li> contententi le tasks filtrate
    mergedTasks =
        <>
            <h2>Current Tasks ({mergedTasks.length})</h2>
            <ul>{mergedTasks}</ul>
        </>
    return mergedTasks;
}

/* Funzione che ritorna una stringa contenente la classe css a seconda del valore della chiave "state" che gli è stata passata come argomento */
function setClassStatus(state) {
    if (state === "backlog") {
        return "state-backlog";
    }
    else if (state === "in_progress") {
        return "state-inprogress";
    }
}

export default TasksNotCompleted;