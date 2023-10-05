import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, CategoryView, ItemDetailView, CartView} from "../pages";

const Navigation = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/category/:categoryId",
      element: <CategoryView />,
    },
    {
      path: "/item/:itemId",
      element: <ItemDetailView/>,
    },
    {
      path: "/cart",
      element: <CartView/>
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default Navigation;
