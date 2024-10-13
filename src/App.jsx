import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App_layout from "./App_layout"
import Home from "./Pages/Home"
import Search from "./Pages/Search"
import Favourite from "./Pages/Favourite"
import Single_gif from "./Pages/Single_gif"
import Category from "./Pages/Category"
import Gif_provider from "./context/gif_context"

function App() {
  const router = createBrowserRouter([
    {
      element: <App_layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/search",
          element: <Search />
        },
        {
          path: "/Favourite",
          element: <Favourite />
        },
        {
          path: "/Single_gif",
          element: <Single_gif />
        },
        {
          path: "/Category",
          element: <Category />
        }
      ]
    }
  ])

  return (
    <>
    <Gif_provider>
    <RouterProvider router={router}/>
    </Gif_provider>
    </>
  )
}

export default App
