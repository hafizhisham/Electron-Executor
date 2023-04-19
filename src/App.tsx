import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Job from "./pages/Job";
import { BASEURL } from "./constant/config";

function App() {
  const router = createBrowserRouter([
    {
      path: BASEURL,
      element: <Home />,
    },
    {
      path: BASEURL + "job/:id",
      element: <Job />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
