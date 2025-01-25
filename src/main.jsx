import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Ourshop from './Ourshop.jsx'
import Ourmenu from './Ourmenu.jsx'
import Contactus from './Contactus.jsx'
import Home from './Home.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App> ,
    children: [
      {
        index: true,
        element: <Home></Home> ,
       
        
      },

      {
        path: "contactUs",
        element: <Contactus></Contactus> ,
       
        
      },
      {
        path: "ourMenu",
        element: <Ourmenu></Ourmenu> ,
       
        
      },
      {
        path: "ourShop",
        element: <Ourshop></Ourshop> ,
       
        
      },
      {
        path: "signOut",
        element: <hello> </hello> ,
       
        
      },
    ]
   
    
  },
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
