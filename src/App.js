import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Page/Homepage";
import Header from "./Components/Header/Header";
import Destination from "./Page/Destination";
import Technology from "./Page/Technology";
import Crew from "./Page/Crew";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/destination",
    element: <Destination />,
  },
  {
    path: "/technology",
    element: <Technology />,
  },
  {
    path: "/crew",
    element: <Crew />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
