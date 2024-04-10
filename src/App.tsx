import './App.css';
import TodoList from "./react-query/TodoList";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import Counter from "./state-management/Counter";
import TaskList from "./state-management/TaskList";
import LoginStatus from "./state-management/LoginStatus";
import {useReducer} from "react";
import tasksReducer from "./state-management/reducers/tasksReducer";
import TasksContext from "./state-management/contexts/tasksContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";

function App() {
    const [tasks, dispatch] = useReducer(tasksReducer, []);

    return (
        <TasksContext.Provider value={{tasks, dispatch}}>
            <NavBar/>
            <HomePage/>
        </TasksContext.Provider>
    );
}

export default App;
