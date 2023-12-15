import Navbar from "../components/Navbar";
import {useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {useAlert} from "react-alert";
import {useNavigate} from "react-router-dom";


const AdminPanel = ({useroption}) => {

  const navigate = useNavigate();
  const {loading,user} = useSelector((state) => state.user);
  const alert = useAlert();

  useEffect(() => {
      if(user && useroption.admin){
          console.log("admin " + useroption.admin);
          alert.success("Have Access privilege");
      }
      else{
          console.log("admin " + useroption.admin);
          alert.error("Not an admin");
          navigate("/login");
      }
  }, []);

    const [selectedOption, setSelectedOption] = useState('');
    return (
      <div className="flex flex-grow items-start justify-center bg-Background min-h-screen relative overflow-hidden">
        <Navbar />
        <div
          style={{ width: "1125px", height: "433px", filter: "blur(155px)" }}
          className="flex-shrink-0 rounded-[1125px] bg-custom-blue absolute top-0 left-0 z-0"
        ></div>
        <div
          style={{ width: "1125px", height: "433px", filter: "blur(155px)" }}
          className="flex-shrink-0 rounded-[1125px] bg-custom-blue absolute bottom-0 right-0 z-0"
        ></div>
        <div className="flex flex-grow items-center justify-center min-h-screen p-6">
          <div className="flex flex-col justify-start items-center z-10 space-y-4">
            <div className="text-Primary text-3xl md:text-4xl font-outfit font-bold py-2">
              Admin
            </div>
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="border-2 border-gray-300 p-2 rounded-md w-full"
            >
              <option value="">Select an option</option>
              <option value="create">Create</option>
              <option value="delete">Delete</option>
              <option value="update">Update</option>
            </select>
            {selectedOption === "create" && (
              <div className="flex flex-col space-y-2 w-full">
                <input
                  className="border-2 border-gray-300 p-2 rounded-md text-center"
                  type="text"
                  placeholder="Enter location for Create"
                />
                <button className="p-2 bg-onPrimary text-white rounded-md hover:opacity-80 transition duration-200">
                  Create
                </button>
              </div>
            )}
            {selectedOption === "delete" && (
              <div className="flex flex-col space-y-2">
                <input
                  className="border-2 border-gray-300 p-2 rounded-md text-center"
                  type="text"
                  placeholder="Enter location for Delete"
                />
                <button className="p-2 bg-onPrimary text-white rounded-md hover:opacity-80 transition duration-200">
                  Delete
                </button>
              </div>
            )}
            {selectedOption === "update" && (
              <div className="flex flex-col space-y-2">
                <input
                  className="border-2 border-gray-300 p-2 rounded-md text-center"
                  type="text"
                  placeholder="Enter old location"
                />
                <input
                  className="border-2 border-gray-300 p-2 rounded-md text-center"
                  type="text"
                  placeholder="Enter new location"
                />
                <button className="p-2 bg-onPrimary text-white rounded-md hover:opacity-80 transition duration-200">
                  Update
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}

export default AdminPanel;