import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, CategoryView, ItemDetailView, CartView,NotFound} from "../pages";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";

const Navigation = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/category/:idCategory",
      element: <CategoryView />,
    },
    {
      path: "/item/:idItem",
      element: <ItemDetailView/>,
    },
    {
      path: "/cart",
      element: <CartView/>
    },
    {
      path:"/login",
      element: <Login/>
    }
    ,
    {
      path:"/register",
      element: <Register/>
    }
    ,
    {
      path: "/*",
      element: <NotFound/>,
    }
    
  ]);
  return <RouterProvider router={routes} />;
};

export default Navigation;
