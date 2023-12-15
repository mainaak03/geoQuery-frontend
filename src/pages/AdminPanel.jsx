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
    

    return(
        <>
            <h1>Admin Panel Page</h1>
        </>
    );
}

export default AdminPanel;