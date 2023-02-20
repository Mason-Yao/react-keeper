import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    })
    const [isDisplayed, setIsDisplayed] = useState(false)

    function handleDisplay() {
        setIsDisplayed(true)
    }

    function handleChange(event) {
        const {name, value} = event.target
        if (name === "title") {
            setNewNote(function (prevState) {
                return {
                    title: value,
                    content: prevState.content
                }
            })
        } else if (name === "content") {
            setNewNote(function (prevState) {
                return {
                    title: prevState.title,
                    content: value
                }
            })
        }
    }

    function handleSubmit(event) {
        props.handleNewNote(newNote)
        setNewNote({
            title: "",
            content: ""
        })
        event.preventDefault()
    }

    return (
        <div>
            <form className="create-note">
                {isDisplayed &&
                    <input onChange={handleChange}
                           name="title"
                           value={newNote.title}
                           placeholder="Title"/>
                }

                <textarea onClick={handleDisplay}
                          onChange={handleChange}
                          name="content"
                          value={newNote.content}
                          placeholder="Take a note..."
                          rows={isDisplayed ? 3 : 1}/>
                <Zoom in={isDisplayed}>
                    <Fab onClick={handleSubmit}>
                        <AddIcon/>
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
