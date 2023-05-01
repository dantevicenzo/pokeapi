import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'

import Home from './pages/Home/index.jsx'
import Pokedex from './pages/Pokedex'
import Legendaries from './pages/Legendaries'
import Documentation from './pages/Documentation'
import NotFound from './pages/NotFound'
import { createHashRouter, RouterProvider} from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import theme from './Theme/Theme.jsx'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/pokedex',
        element: <Pokedex />
      },
      {
        path: '/legendaries',
        element: <Legendaries />
      },
      {
        path: '/documentation',
        element: <Documentation />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={ theme }>
    <React.StrictMode>
      <RouterProvider router={ router } />
    </React.StrictMode>
  </ThemeProvider>,
)
