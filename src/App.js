import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Products from "./pages/Products/Products";
import "./styles/style.scss"
import Home from "./pages/Home/Why/Home";
import Do from "./pages/Home/Do/Do";
import Courses from "./pages/Home/Courses/Courses";
import Will from "./pages/Home/Will/Will";
import Blog from "./pages/Home/Blog/Blog";
import Why from "./pages/Home/Why/Why";
import Enjoy from "./pages/Home/Enjoy/Enjoy";

function App() {
  return (
  <>
    <Routes>
      <Route path={"/"} element={<Layout/>}>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/"} element={<Enjoy/>}/>
          <Route path={"/products"} element={<Products/>}/>
        <Route path = {"/"} element={<Why/>}/>
        <Route path={"/"} element={<Courses/>}/>
        <Route path={"/"} element={<Do/>}/>
        <Route path={"/"} element={<Will/>}/>
        <Route path = {"/"} element={<Blog/>}/>
      </Route>
    </Routes>
  </>
  );
}

export default App;
