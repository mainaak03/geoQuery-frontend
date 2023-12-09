import ellipse from "../assets/images/ellipse.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {logout} from "../actions/userAction";
import {useAlert} from "react-alert";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  const token = localStorage.getItem("token");


  return (
    <>
      <nav
        className="p-4 border-b border-onPrimary border-opacity-10 fixed top-0 left-0 w-full z-10"
        style={{ boxShadow: "0px 0px 40px -1px rgba(54, 32, 255, 0.10)" }}
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:px-8 lg:px-16">
          <div className="flex items-center space-x-6">
            <img src={ellipse} alt="ellipse" className="w-10 h-10" />
            <div className="text-Primary text-3xl md:text-4xl font-outfit font-bold cursor-pointer" onClick={()=>{navigate("/");}}>
              GeoQuery
            </div>
          </div>
          <ul className="flex flex-col md:flex-row md:space-x-16 space-y-4 md:space-y-0 space-x-16 justify-center items-center mt-2">
            <li>
              <div
                className="text-Primary hover:text-gray-300 text-2xl font-outfit cursor-pointer"
                onClick={() => {
                  navigate("/howitworks");
                }}
              >
                How it Works
              </div>
            </li>
            <li>
              <div
                className="text-Primary hover:text-gray-300 text-2xl font-outfit cursor-pointer"
                onClick={() => {
                  navigate("/query");
                }}
              >
                About Us
              </div>
            </li>
            <li>
              {token ? (
                
                <button className="bg-onPrimary hover:opacity-80 text-Primary text-xl h-11 w-36 rounded-lg font-outfit flex items-center justify-center"
                onClick={() => {
                  localStorage.removeItem("token");
                  dispatch(logout());
                  alert.success("Logged Out Successfully");
                  navigate("/");
                }}
              >
                <div className="text-center">
                  <Link to="/">Logout</Link>
                </div>
              </button>
              ):(
                <button className="bg-onPrimary hover:opacity-80 text-Primary text-xl h-11 w-36 rounded-lg font-outfit flex items-center justify-center">
                  <div className="text-center">
                    <Link to="/login">Get Started</Link>
                  </div>
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
