import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'swiper/css'
import '././assets/css/icofont.min.css'
import '././assets/css/animate.css'
import './assets/css/style.min.css'

import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Blog from './Blogs/Blog.jsx'
import Shop from './shop/Shop.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path:"/blog",
        element:<Blog />
      },
      {
        path: "/shop",
        element: <Shop/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
