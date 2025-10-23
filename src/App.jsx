import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import Layout from "./components/Layout/Index"
import BlogPartD from "./components/Utility/BlogPartD"



function App() {
  

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<BlogPartD />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
