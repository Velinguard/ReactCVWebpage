import {Component} from "react";
import {Alignment, Button, Navbar} from "@blueprintjs/core";
import {Link} from "react-router-dom";
import React from "react";

var windowWidth = window.document.body.clientWidth;

export class Header extends Component {
    render() {
        var me = ((windowWidth >= 600) ? "Samuel Brotherton CV Webpage" : "CV");
        console.log("state: " + this.pageNumber);
        var cadets = ((windowWidth >= 600) ? "Air Cadets" : "ATC");
        var bridge = ((windowWidth >= 600) ? "St Gregory's Bridge" : "EPQ");
        var coding = ((windowWidth >= 600) ? "Coding Projects" : "Projects");
        return <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>{me}</Navbar.Heading>
                <Navbar.Divider/>
                <Link to="/">
                    <Button className="bp3-minimal" icon="home">Home</Button>
                </Link>
                <Link to="/air-cadets">
                    <Button className="bp3-minimal" icon="airplane">Cadets</Button>
                </Link>
                <Link to="/india">
                    <Button className="bp3-minimal" icon="wrench">Bridge</Button>
                </Link>
                <Link to="/coding-projects">
                    <Button className="bp3-minimal" icon="console">Coding</Button>
                </Link>
            </Navbar.Group>
        </Navbar>
    }
}