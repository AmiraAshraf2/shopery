import { RouterProvider } from "react-router-dom"
import { route } from "./router/Router"

function App() {


  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
