import React, {useEffect, useState} from "react";
import axios from "axios";

function Header() {
    const [username, setUserName] = useState("")
    useEffect(() => {
        axios
            .get("/user", {withCredentials: true})
            .then(response => {
                setUserName(response.data.username)
                }
            )
    }, [])

    return (
        <header>
            <h1>Keeper</h1>
            <h2>Hello {username}</h2>
        </header>
    );
}

export default Header;
