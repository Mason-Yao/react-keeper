import Cookies from "js-cookie";
import {Navigate} from "react-router-dom";

function AuthComponent ({Component}) {
    // if (!Cookies.get("user")) {
    //     console.log("redirect to login")
    //     return <Navigate to="/login" />
    // }
    // if use session to authenticate, it will be authorized in backend server
    return <Component />
}

export default AuthComponent