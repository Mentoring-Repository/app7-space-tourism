import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Page/Homepage";
import Header from "./Components/Header/Header";
import Destination from "./Page/Destination";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/destination",
    element: <Destination />,
  },
]);

function App() {
  return (
    <>
      {/* <Header /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
