import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import Query from "./pages/Query";
import How from "./pages/Howitworks";
import About from "./pages/AboutUs";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/query" exact element={<Query />} />
        <Route path="/howitworks" exact element={<How />} />
        <Route path="/aboutus" exact element={<About />} />
      </Routes>
    </>
  )
}

export default App
