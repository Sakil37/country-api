import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./defultlayout/Home";
import "../src/css/custom.css";
import Services from "./defultlayout/Services";
import Details from "./defultlayout/Details";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <Services />,
          loader: async () => {
            return fetch("https://restcountries.com/v3.1/all");
          },
        },
        {
          path: "/details/:code",
          element: <Details />,
          loader: async ({ params }) => {
            const { code } = params;
            return fetch(`https://restcountries.com/v3.1/alpha/${code}
            `);
          },
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
// fetch(``)
