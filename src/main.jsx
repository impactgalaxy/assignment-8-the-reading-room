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
import PagesToRead from './pages/pagesToRead/PagesToRead.jsx'
import BuyNow from './pages/buyNow/BuyNow.jsx'
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
      },
      {
        path: "/pages-to-read",
        loader: () => fetch("../booksData.json"),
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "/buy",
        element: <BuyNow></BuyNow>
      },
      {
        path: "/buy/:id",
        loader: () => fetch("../booksData.json"),
        element: <h1>This is buy book section</h1>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
