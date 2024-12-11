# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



```bash
#Istruzioni: 

cd cartella-personale esercizi\

npm create vite@latest react-task-list -- --template react

npm install

# add package-lock.json to .gitignore file

#installo i pacchetti che mi servono, ad esempio bootstrap:
npm install bootstrap

#per usare bootstrap lo devo importare 
#in main.jsx aggiungo:
import 'bootstrap/dist/css/bootstrap.min.css';

```

```bash
#Esercizio:
Mostriamo in due liste diverse gli elementi dell’array tasks. Nella prima lista mostriamo solo i task (title, priority e estimatedTime) che hanno stato “backlog” o “in_progress”. Nella seconda lista mostriamo i task che hanno stato “completed”.
Infine riprodurre il layout lasciato in allegato.
*BONUS*
Mostrare lo stato di ogni task in un piccolo tag di fianco al titolo, associando però ad ogni stato un colore diverso.
```