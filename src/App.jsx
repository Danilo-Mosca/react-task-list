/* Importo i componenti: */
import HeaderComponent from "./components/HeaderComponent";
import TasksCompleted from "./components/TasksCompleted";
import TasksNotCompleted from "./components/TasksNotCompleted";

function App() {
  //parte logica di funzionamento

  //parte html da ritornare
  return (
    //Prima richiamo il componente <React.Fragment> o nella forma abbreviata <> per permettere di tornare più elementi:
    <>
      <HeaderComponent />
      <section>
        <TasksNotCompleted />
        <hr />
        <TasksCompleted />
      </section>
    </>
  );
}

export default App;