import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home} from "../pages";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './../components/ItemDetailContainer/ItemDetailContainer';

const Navigation = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/category/:idCategory",
      element: <ItemListContainer />,
    },
    {
      path: "/makers/:idProduct",
      element: <ItemDetailContainer />,
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default Navigation;
