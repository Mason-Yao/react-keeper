import React, {useState} from "react"
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
// import {useCookies} from "react-cookie";


function Login() {
    axios.defaults.baseURL = "http://localhost:13000"
    // const [cookies, setCookies] = useCookies(["user"])
    // initial setting of user in the input area, will be updated automatically by handleChange()
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    // the preValue will hold the previous value which could be either username or password
    function handleChange(event) {
        const {name, value} = event.target
        if(name === "username") {
            setUser(prevValue => {
                return {
                    username: value,
                    password: prevValue.password
                }
            })
        } else if(name === "password") {
            setUser(prevValue => {
                return {
                    username: prevValue.username,
                    password: value
                }
            })
        }
    }

    function handleSubmit(event) {
        axios
            // withCredential need to set to true for cookies and sessions sent cross region
            .post("/login", user, {withCredentials:true})
            .then(response => {
                console.log("login data back from server " + response.data)
                // redirect to user page if successfully logged in
                window.location.href = ("/user")
            })
            .catch(err => {
                // the backend will send error code 401 if authentication failed
                if (err.response.status === 401) {
                    // Redirect to login page
                    window.location.href = ('/login');
                } else {
                    // Handle other errors
                }
            })
        event.preventDefault()
    }

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange}
                           type="email"
                           className="form-control"
                           placeholder="Input your username"
                           name="username"
                           value={user.username}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChange}
                           type="password"
                           className="form-control"
                           placeholder="Input your password"
                           name="password"
                           value={user.password}/>
                </div>
                <button type="submit" className="btn btn-dark">Login</button>
            </form>
            <Footer />
        </div>
    )
}

export default Login

