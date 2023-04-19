import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Job from "./pages/Job";

function App() {
  const router = createBrowserRouter([
    {
      path: "/SEC-2023-Day-15",
      element: <Home />,
    },
    {
      path: "/SEC-2023-Day-15/job/:id",
      element: <Job />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
