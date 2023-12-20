import Navbar from "../components/Navbar";
import {useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {useAlert} from "react-alert";
import {useNavigate} from "react-router-dom";
import { createNewLocation,deleteLocation,updateLocation} from "../actions/locationAction";
import Loader from "../components/Loader";


const AdminPanel = ({useroption}) => {

  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();

  const {loading} = useSelector((state) => state.location);

  const [newLocation, setNewLocation] = useState("");
  const [oldLocation, setOldLocation] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
      if(useroption && useroption.admin){
          alert.success("Have Access privilege");
      }
      else{
          alert.error("Not an admin");
          navigate("/login");
      }
  }, []);

  const createLocation = async (e) => {
    const locData = {
      loc : newLocation,
      category: selectedCategory
    };
    let token = localStorage.getItem("token");
    if(token){
      token = "Bearer " + token
    }
    const res = await dispatch(createNewLocation(locData,token));
    if(res) alert.success("New Location Added");
    else alert.error("Error Occurred");
  };

  const updateOldToNewLoc = async (e) => {
    const locData = {
      old_loc : oldLocation,
      new_loc : newLocation,
    };
    let token = localStorage.getItem("token");
    if(token){
      token = "Bearer " + token
    }
    const res = await dispatch(updateLocation(locData,token));
    if(res) alert.success("Location Updated");
    else alert.error("Error Occurred");
  };

  const deleteLoc = async (e) => {
    const locData = {
      loc : location
    };
    let token = localStorage.getItem("token");
    if(token){
      token = "Bearer " + token
    }
    const res = await dispatch(deleteLocation(locData,token));
    if(res) alert.success("Location Updated");
    else alert.error("Error Occurred");
  };

    const [selectedOption, setSelectedOption] = useState('');
    const [selectedCategory,setSelectedCategory] = useState('');
    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="flex flex-grow items-start justify-center bg-Background min-h-screen relative overflow-hidden">
              <Navbar />
              <div
                style={{
                  width: "1125px",
                  height: "433px",
                  filter: "blur(155px)",
                }}
                className="flex-shrink-0 rounded-[1125px] bg-custom-blue absolute top-0 left-0 z-0"
              ></div>
              <div
                style={{
                  width: "1125px",
                  height: "433px",
                  filter: "blur(155px)",
                }}
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
                        required
                        value={newLocation}
                        onChange={(e) => setNewLocation(e.target.value)}
                      />
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="border-2 border-gray-300 p-2 rounded-md w-full"
                      >
                        <option value="">Select category</option>
                        <option value="city">city</option>
                        <option value="state">state</option>
                        <option value="country">country</option>
                      </select>
                      <button
                        className="p-2 bg-onPrimary text-white rounded-md hover:opacity-80 transition duration-200"
                        onClick={createLocation}
                      >
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
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                      <button
                        className="p-2 bg-onPrimary text-white rounded-md hover:opacity-80 transition duration-200"
                        onClick={deleteLoc}
                      >
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
                        required
                        value={oldLocation}
                        onChange={(e) => setOldLocation(e.target.value)}
                      />
                      <input
                        className="border-2 border-gray-300 p-2 rounded-md text-center"
                        type="text"
                        placeholder="Enter new location"
                        required
                        value={newLocation}
                        onChange={(e) => setNewLocation(e.target.value)}
                      />
                      <button
                        className="p-2 bg-onPrimary text-white rounded-md hover:opacity-80 transition duration-200"
                        onClick={updateOldToNewLoc}
                      >
                        Update
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
}

export default AdminPanel;