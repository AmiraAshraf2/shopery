import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../components/pages/Home";
import { Products } from "../components/pages/Products";
import { SingleProduct } from "../components/pages/SingleProduct";
import { Login } from "../components/pages/Login";
import { Register } from "../components/pages/Register";

export const route = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            {
                element: <Home />, index: true
            },

            { path: 'products', element: <Products /> },
            { path: 'products/:productId', element: <SingleProduct /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> }
        ]
    }
])