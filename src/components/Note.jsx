import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
    const id = props.id
    return (
        <div className="note" key={id}>
            <h1>{props.name}</h1>
            <p>{props.content}</p>
            <button onClick={() => {props.handleNote(id)}}><DeleteIcon /></button>
        </div>
    );
}

export default Note;
