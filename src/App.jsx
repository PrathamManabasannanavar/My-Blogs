import NavBar from "./NavBar"
import {HashRouter as Router, Route, Routes} from "react-router-dom"
import HomePage from "./HomePage"
import Blogs from "./Blogs"
import Contact from "./Contact"

function App() {
  return (
    <Router>
      <NavBar/>

      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/Blogs" element={<Blogs/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
