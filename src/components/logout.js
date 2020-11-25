import Auth from "../constants/auth";
import React from "react";

const auth = new Auth();
const Logout = (props) =>{
    const handleLogout = async () => {
        await auth.logout();
        props.setLoginState()
       
      };
    return (
        <div>
    <button onClick={handleLogout} >Logout</button>
        </div>
    )
}

export default Logout;