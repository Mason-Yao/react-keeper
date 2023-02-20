import React, {useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
// import Cookies from "js-cookie";
// import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button"


function User() {
    axios.defaults.baseURL = "http://localhost:13000"
    // console.log("cookies in user page " + Cookies.get("user"))
    const [username, setUsername] = useState("")
    const [notes, setNotes] = useState([])
    // useEffect denps set to [] means it will only be called once at the first render.
    useEffect(() => {
        axios
            // everytime when the User element to be rendered, it will send GET request to backend to check
            // login status, if it is unauthorized, an error code 401 will return and redirect user to login page.
            // if authorized, the notes and username will be initialized to database value.
            .get("/user", {withCredentials: true})
            .then(response => {
                    const user = response.data
                    setNotes(user.notes)
                    setUsername(user.username)
                }
            )
            .catch(err => {
                if(err.response.status === 401) {
                    window.location.href = ("/login")
                }
            })
    }, [])



    function addNewNote(newNote) {
        setNotes([...notes, newNote])
    }

    function deleteNote(id) {
        // const newNotes = notes.filter(function (note, index) {
        //     return index !== id
        // })

        setNotes(prevItems => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
    }

    function updateNotesToDB() {

        axios
            .put("/user", {
                username: username,
                notes: notes,
            })
            .then((response) => {
                console.log("User " + response.data.username + " notes have been updated")
                window.location.href = ("/user")
            })
            .catch(err => {
                console.log(err)})
    }

    return (
        <div>
            <div>
                <Header/>
                <CreateArea
                    handleNewNote={addNewNote}
                />
                {notes.map((note, index) => {
                    return (
                        <Note
                            id={index}
                            key={index}
                            name={note.title}
                            content={note.content}
                            handleNote={deleteNote}
                        />
                    )
                })}
            </div>
            <br />
            <div id="update-button" >
                <Button variant="contained" onClick={updateNotesToDB}>UPDATE</Button>
            </div>
            <Footer/>
        </div>
    );
}

export default User;
