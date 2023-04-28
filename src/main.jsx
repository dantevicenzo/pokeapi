import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'

import Home from './pages/Home/Home.jsx'
import Pokedex from './pages/Pokedex/Pokedex'
import Legendaries from './pages/Legendaries/Legendaries'
import Documentation from './pages/Documentation/Documentation'
import NotFound from './pages/NotFound/NotFound'
import { createHashRouter, RouterProvider} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'pokedex',
        element: <Pokedex />
      },
      {
        path: 'legendaries',
        element: <Legendaries />
      },
      {
        path: 'documentation',
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
