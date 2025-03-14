import NavBar from "./NavBar"
import {HashRouter as Router, Route, Routes} from "react-router-dom"
import HomePage from "./HomePage"
import Blogs from "./Blogs"

function App() {
  return (
    <Router>
      <NavBar/>

      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route path="/contact" element="contact us"></Route>
        <Route path="/Blogs" element={<Blogs/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
