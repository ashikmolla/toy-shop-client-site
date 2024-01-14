import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import Routes from './Routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='w-[1366px] mx-auto border border-indigo-700'>
   <RouterProvider router={Routes} />
   </div>
  </React.StrictMode>,
)
