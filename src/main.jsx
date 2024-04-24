import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddsCoffee from './components/AddsCoffee.jsx';
import UpdatesCoffee from './components/UpdatesCoffee.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('http://localhost:5000/coffee')
  },
  {
    path: 'addCoffees',
    element:<AddsCoffee></AddsCoffee>
  },
  {
    path: 'updateCoffee/:id',
    element: <UpdatesCoffee></UpdatesCoffee>,
    loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
