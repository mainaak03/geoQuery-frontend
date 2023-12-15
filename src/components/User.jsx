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

const UserOption = ({user}) => {

  const alert = useAlert();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const navigate =  useNavigate();

  const options = [
    { icon: <HomeIcon />, name: "Home", func: home },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];

  if (user.admin) {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function home(){
    navigate("/");
  }

  function dashboard() {
    navigate("/admin/panel");
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
            src={"/Profile.png"}
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
