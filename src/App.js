import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Page/Homepage';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Homepage />
  }
])



function App() {
  return (
    <RouterProvider router={router}/> 
  );
}

export default App;
