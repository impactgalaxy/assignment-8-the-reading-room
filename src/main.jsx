import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage.jsx'
import MainLayout from './pages/mainLayout/MainLayout.jsx'
import Books from './components/books/Books.jsx'
import ErrorPage from './pages/errorPage/ErrorPage.jsx'
import BookReviews from './pages/bookReviews/BookReviews.jsx'
import ListedBooks from './pages/listedBooks/ListedBooks.jsx'
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
        path: "/all-books/:id",
        loader: () => fetch("../booksData.json"),
        element: <BookReviews></BookReviews>,
      },
      {
        path: "/listed-books",
        loader: () => fetch("../booksData.json"),
        element: <ListedBooks></ListedBooks>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
