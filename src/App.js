import React, {Component} from 'react';
import './App.css';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../node_modules/normalize.css/normalize.css';
import {AboutMe} from './aboutme/AboutMe';
import {AirCadets} from './AirCadets/AirCadets';
import {India} from './india/India';
import {CodingProjects} from './codingProjects/CodingProjects';
import {Verify} from './Verify'
import {BrowserRouter, Link} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import {Header} from "./Header/Header";
import {Text} from "@blueprintjs/core";

const headerStyle = {
    position: 'fixed',
    zIndex: 9999,
    width: '100%',
    backgroundColor: 'rgba(255,255,255,1)'
}

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <meta name={"Description"} content={"Sam Brotherton CV Webpage"}></meta>
                <BrowserRouter>
                    <header className="App-header">
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
                              integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
                              crossorigin="anonymous"/>
                        <Header/>
                    </header>
                    <div style={headerStyle}>
                    </div>
                    <body>
                    <div className="App-body">
                        <div style={{marginTop: "90px"}}>
                            <Route exact path="/" component={AboutMe}/>
                            <Route path="/about-me" component={AboutMe}/>
                            <Route path="/air-cadets" component={AirCadets}/>
                            <Route path="/india" component={India}/>
                            <Route path="/coding-projects" component={CodingProjects}/>
                            <Route path="/zohoverify/verifyforzoho.html" component={Verify}/>
                        </div>
                    </div>
                    </body>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
