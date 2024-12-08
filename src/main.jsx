import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'swiper/css'
import '././assets/css/icofont.min.css'
import '././assets/css/animate.css'

import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Blog from './Blogs/Blog.jsx'

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
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
