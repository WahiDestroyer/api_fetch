import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import Layout from "./components/Layout/Index"



function App() {
  

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
