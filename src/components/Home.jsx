import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
    return (
        <div>
            <Header />
            <a className="btn btn-light btn-lg" href="/register" role="button">Register</a>
            <a className="btn btn-dark btn-lg" href="/login" role="button">Login</a>
            <Footer />
        </div>
    )
}

export default Home