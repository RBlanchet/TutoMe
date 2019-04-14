import React, { Component } from 'react';
import logo from "../logo.svg";
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <header className="App-header">
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                <p>Bienvenue dans une application d'exemple ReactJS</p>
                <Link className="App-link" to="/pokedex">C'est partit !</Link>
            </header>
        );
    }
}

export default Home;