import {createBrowserRouter} from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import exp from "node:constants";
import ContactPage from "./ContactPage";

const router = createBrowserRouter([
    {path: '/', element: <HomePage/>},
    {path: '/users', element: <UserListPage/>},
    {path: '/contact', element: <ContactPage/>},

])

export default router;