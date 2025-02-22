import Navbar from "./components/functionalComponents/NavBar"
import Skills from "./components/functionalComponents/Skills"
import Home from "./components/functionalComponents/Home"
import Project from "./components/functionalComponents/Project"
import About from "./components/functionalComponents/About"
import Contact from "./components/functionalComponents/Contact"
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
      <main>
          <Router>
            <Navbar></Navbar>
            <Routes>
            <Route path="/home"element={<Home></Home>}></Route>
            <Route path="/skills"element={<Skills></Skills>}></Route>
            <Route path="/project"element={<Project></Project>}></Route>
            <Route path="/about"element={<About></About>}></Route>
            <Route path="/contact"element={<Contact></Contact>}></Route>
            </Routes>
        </Router>
      </main>
  )
}

export default App
