/* Importo l'array tasks */
import tasks from "./data/tasks";
/* Importo i componenti: */
import HeaderComponent from "./components/HeaderComponent";
// import TasksCompleted from "./components/TasksCompleted";
// import "./App.css";

function App() {
  //parte logica
  function tasksCompleted() {
    let tasksCompleted = [];
    tasksCompleted = tasks.filter((element) => {
      return element.state.includes("completed")
    }).map((element) => {
      return <li key={element.id}>
        <h3>{element.title}</h3>
        <p>Priority: {element.priority}</p>
        <p>Est. time {element.estimatedTime}</p>
      </li>
    });

    return tasksCompleted;
  }

  //parte html da ritornare
  return (
    //Prima richiamo il componente <React.Fragment> o nella forma abbreviata <> per permettere di tornare più elementi:
    <>
      <HeaderComponent />
      <h1>Hello World!</h1>

      <h2>Completed Tasks ({tasksCompleted().length})</h2>
      <ul>{tasksCompleted()}</ul>
    </>
  );
}

export default App;
