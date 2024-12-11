/* Importo l'array tasks */
import tasks from "./data/tasks";
/* Importo i componenti: */
import HeaderComponent from "./components/HeaderComponent";
import TasksCompleted from "./components/TasksCompleted";
import TasksNotCompleted from "./components/TasksNotCompleted";
// import "./App.css";

/* Importo lo useState direttamente da react */
import { useState } from "react";

function App() {
  //parte logica

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