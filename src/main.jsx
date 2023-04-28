import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'

import Home from './pages/Home/Home.jsx'
import Pokedex from './pages/Pokedex/Pokedex'
import Legendaries from './pages/Legendaries/Legendaries'
import Documentation from './pages/Documentation/Documentation'
import NotFound from './pages/NotFound/NotFound'
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const baseURL = "/pokeapi"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: baseURL,
        element: <Home />
      },
      {
        path: baseURL + "/pokedex",
        element: <Pokedex />
      },
      {
        path: baseURL + "/legendaries",
        element: <Legendaries />
      },
      {
        path: baseURL + "/documentation",
        element: <Documentation />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
