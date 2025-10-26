import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import BlogDetails from "./components/home/BlogDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
