import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
