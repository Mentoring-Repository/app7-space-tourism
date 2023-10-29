import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Page/Homepage";
import Header from "./Components/Header/Header";
import Destination from "./Page/Destination";
import Technology from "./Page/Technology";
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
		path: '/technology',
		element: <Technology/>
	}
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
