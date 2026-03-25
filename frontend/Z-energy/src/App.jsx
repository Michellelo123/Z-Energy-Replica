import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/homepage/Home.jsx'
// import './App.css'

const router = createBrowserRouter([
{
  path:"/",
  element: <Home/>
},
{
  path:"/about",
  element: <Home/>
}
])



function App() {

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
