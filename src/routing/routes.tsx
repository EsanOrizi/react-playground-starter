import {createBrowserRouter} from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import exp from "node:constants";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UserListPage/>},
            {path: 'users/:id', element: <UserDetailPage/>},
        ]
    }


])

export default router;