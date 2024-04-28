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
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";
import AuthProvider from "./state-management/AuthProvider";
import TasksProvider from "./state-management/tasksProvider";

function App() {

    return (
        <AuthProvider>
        <TasksProvider>
            <NavBar/>
            <HomePage/>
        </TasksProvider>
       </AuthProvider>
    );
}

export default App;
