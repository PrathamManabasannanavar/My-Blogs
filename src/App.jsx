import NavBar from "./NavBar"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import HomePage from "./HomePage"
import Blogs from "./Blogs"

function App() {
  return (
    <Router>
      <NavBar/>

      <Routes>
        <Route path="My-Blogs/" element={<HomePage/>}></Route>
        <Route path="My-Blogs/contact" element="contact us"></Route>
        <Route path="My-Blogs/Blogs" element={<Blogs/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
