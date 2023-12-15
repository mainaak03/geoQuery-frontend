import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/SignUp";
import Query from "./pages/Query";
import How from "./pages/Howitworks";
import About from "./pages/AboutUs";
import AdminPanel from "./pages/Admin";
import {useEffect} from "react";
import {loadUser} from "./actions/userAction";
import store from "./store";
import {useSelector} from "react-redux";
import UserOption from "./components/User";

function App() {

  const { user, isAuthenticated } = useSelector((state) => state.user);
  
  useEffect(() => {
    let token = localStorage.getItem("token");
    if(token){
      token = "Bearer " + token
    }
    store.dispatch(loadUser(token));
  }, []);


  return (
    <>
      {isAuthenticated && <UserOption user={user} />}
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/howitworks" exact element={<How />} />
        <Route path="/aboutus" exact element={<About />} />
        <Route path="/query" exact element={<Query />} />
        <Route path="/admin/panel" exact element={<AdminPanel useroption={user} />} />
      </Routes>
    </>
  )
}

export default App
