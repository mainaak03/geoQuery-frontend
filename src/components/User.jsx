import React, { useState ,Fragment} from "react";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import HomeIcon from "@material-ui/icons/Home";
import { useAlert } from "react-alert";
import {useDispatch} from "react-redux";
import "./Loader.css";
import {useNavigate,Link} from "react-router-dom";
import {logout} from "../actions/userAction";
import { MdSend } from "react-icons/md";
import profile from "../assets/images/profile.jpg";

const UserOption = ({user}) => {

  const alert = useAlert();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const navigate =  useNavigate();

  const options = [
    { icon: <HomeIcon />, name: "Home", func: home },
    { icon: <MdSend />, name: "Query", func: createQuery },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];

  if (user.admin) {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Admin",
      func: dashboard,
    });
  }

  function createQuery(){
    navigate("/query");
  }

  function home(){
    navigate("/");
  }

  function dashboard() {
    navigate("/admin");
  }
  function logoutUser() {
    localStorage.removeItem("token");
    dispatch(logout());
    alert.success("Logged Out Successfully");
    navigate("/");
  }

  return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "1200"}}
        open={open}
        direction="up"
        className="instantLink"
        icon={
          <img
            className="instantLinkIcon"
            src={profile}
            alt="Profile"
          />
        }
      >
      {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            className="instantLinkAction"
            tooltipOpen={window.innerWidth<700?true:false}
          />
        ))} 
      </SpeedDial>
    </Fragment>
  );
};

export default UserOption;
