import React, {useState} from "react"
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

function Register() {
    axios.defaults.baseURL = "http://localhost:13000"
    // const [cookies, setCookies] = useCookies(["user"])
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

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
            .post("/register", user, {withCredentials:true})
            .then(response => {
                console.log("login data back from server " + response.data)
                // setCookies("user", response.data, {path: "/", maxAge: 60})
                window.location.href = ("/user")
            })
            .catch(err => {
                if (err.response.status === 400) {
                    console.log(err.response.data)
                    // Redirect to login page
                    window.location.href = '/login';
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
                <button type="submit" className="btn btn-dark">Register</button>
            </form>
            <Footer />
        </div>
    )
}

export default Register