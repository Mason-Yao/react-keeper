import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import User from "./components/User";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register"
import AuthComponent from "./components/AuthComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Home />}/>
                <Route path="login" element={<Login />}/>
                <Route path="register" element={<Register />}/>
                <Route path="user" element={<AuthComponent Component={User}/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);


//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the User.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the User when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/
