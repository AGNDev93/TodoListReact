import React from "react";
import Todolist from "./Todolist.jsx";

//create your first component
const Home = () => {
    return (
        <div className="vh-100 d-flex justify-content-center pt-5 pb-5" style={{ backgroundImage: 'url("https://img.freepik.com/foto-gratis/lapices-naranjas-sobre-superficie-madera_23-2148194664.jpg?t=st=1737231598~exp=1737235198~hmac=2fbe4fe0389200cabac63b1dd0e3654d876a61fdd55a75ea2104a75d3cd8c384&w=900")', backgroundSize: "cover" }}>
            <Todolist />
        </div>
    );
};

export default Home;
