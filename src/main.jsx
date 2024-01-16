import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import Routes from './Routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className=' w-[px] md:w-[768px] lg:w-[1024px] xl:w-[1350px] p-0 mx-auto border font-serif'>
   <RouterProvider router={Routes} />
   </div>
  </React.StrictMode>,
)
