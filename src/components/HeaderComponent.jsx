/* Funzione che restituisce il titolo dell'header */
function HeaderComponent() {
    const title = "Task Manager";
    return (
        <header>
            <section>
            <h1>{title}</h1>
            </section>
        </header>
    )
}

export default HeaderComponent;