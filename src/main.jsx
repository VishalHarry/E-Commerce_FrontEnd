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
import SingleProduct from './shop/SingleProduct.jsx'
import CartPage from './shop/CartPage.jsx'
import SingleBlog from './Blogs/singleBlog.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import AuthProvider from './components/contaxt/AuthProvider.jsx'
import PrivateRouts from './PrivateRouts/PrivateRouts.jsx'

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
        path:"/blog/:id",
        element: <SingleBlog/>
      },
      {
        path: "/shop",
        element: <Shop/>
      },
      {
        path: "/shop/:id",
        element: <SingleProduct/>
      },
      {
        path:"/cart-page",
        element: <PrivateRouts><CartPage/></PrivateRouts>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
     

    ]
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  }

 
]);

createRoot(document.getElementById('root')).render(
 
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  
)
