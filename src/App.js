import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Page/Homepage';
import Header from './Components/Header/Header';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Homepage />

  }
])



function App() {
  return (
    <>
    <Header/>
    <RouterProvider router={router}/> 
    </>
  );
}

export default App;
