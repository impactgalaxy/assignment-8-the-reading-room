import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage.jsx'
import MainLayout from './pages/mainLayout/MainLayout.jsx'
import Books from './components/books/Books.jsx'
import ErrorPage from './pages/errorPage/ErrorPage.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/all-books",
        element: <Books></Books>
      },
      {
        path: "all-books/:id",
        element: <p></p>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
