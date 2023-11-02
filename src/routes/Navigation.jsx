import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, CategoryView, ItemDetailView, CartView,OrderSearchView,UserOrderView,OrderDetailView,NotFound} from "../pages";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

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
      path: "/search-order",
      element: <OrderSearchView/>
    }
    ,
    {
    path: "/my-orders",
    element: <UserOrderView/>
    },
    {
      path: "/order/:orderID",
      element: <OrderDetailView/>
    },
    {
      path: "/*",
      element: <NotFound/>,
    }
    
  ]);
  return <RouterProvider router={routes} />;
};

export default Navigation;
