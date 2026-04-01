import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../components/pages/Home";
import { Products } from "../components/pages/Products";
import { SingleProduct } from "../components/pages/SingleProduct";
import { Login } from "../components/pages/Login";
import { Register } from "../components/pages/Register";
import { Profile } from "../components/pages/Profileuser.jsx";
import { PageNotFound } from "../components/pages/PageNotFound.jsx";

export const route = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            {
                element: <Home />, index: true
            },

            { path: 'products', element: <Products Category="" /> },
            { path: 'Fresh Fruit', element: <Products Category="Fresh Fruit" /> },
            { path: 'Fresh Vegetables', element: <Products Category="Fresh Vegetables" /> },
            { path: 'Meat Fish', element: <Products Category="Meat & Fish" /> },
            { path: 'Snacks', element: <Products Category="Snacks" /> },
            { path: 'Beverages', element: <Products Category="Beverages" /> },
            { path: 'Beauty Health', element: <Products Category="Beauty & Health" /> },
            { path: 'Bread Bakery', element: <Products Category="Bread & Bakery" /> },
            { path: 'Baking Needs', element: <Products Category="Baking Needs" /> },
            { path: 'Cooking', element: <Products Category="Cooking" /> },
            { path: 'Diabetic Food', element: <Products Category="Diabetic Food" /> },
            { path: 'Dish Detergents', element: <Products Category="Dish Detergents" /> },
            { path: 'Oil', element: <Products Category="Oil" /> },
            { path: 'products/:productId', element: <SingleProduct /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            { path: "profile", element: <Profile/> },
            { path: "*", element: <PageNotFound /> }
        ]
    }
])