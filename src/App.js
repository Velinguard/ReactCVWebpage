import React, { Component } from 'react';
import './App.css';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../node_modules/normalize.css/normalize.css';
import {Navbar, Alignment, Button} from "@blueprintjs/core";
import {AboutMe} from './aboutme/AboutMe';
import { AirCadets } from './AirCadets/AirCadets';
import { India } from './india/India';
import {CodingProjects} from './codingProjects/CodingProjects';

const headerStyle = {
  position: 'fixed', 
  zIndex: 9999, 
  width: '100%', 
  backgroundColor: 'rgba(255,255,255,1)', 
  marginTop: -90
}

var pageTag = window.location.href.split('#')[1];
const CodingLink = "CodingProjects";
const AboutMeLink = "AboutMe";
const AirCadetsLink = "AirCadets";
const StGregsBridge = "IndiaProject";

class App extends Component {
  constructor(props){
    super(props);
    var pageNum = 0;
    if (pageTag === AirCadetsLink){
      pageNum = 1;
    } else if (pageTag === StGregsBridge){
      pageNum = 2;
    } else if (pageTag === CodingLink){
      pageNum = 3;
    }
    this.state = {page: pageNum};
  }
  
  render() {
    return (
      <div className="App">
        <div style={headerStyle}>
          <header className="App-header">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
            <Navbar>
              <Navbar.Group align={Alignment.LEFT}>
                  <Navbar.Heading>Samuel Brotherton CV Webpage</Navbar.Heading>
                  <Navbar.Divider />
                  <Button className="bp3-minimal" icon="home" text="Home" onClick={() => this.setState({page: 0})} />
                  <Button className="bp3-minimal" icon="airplane" text="Air Cadets" onClick={() => this.setState({page: 1})}/>
                  <Button className="bp3-minimal" icon="wrench" text="St Gregory's Bridge" onClick={() => this.setState({page: 2})} />
                  <Button className="bp3-minimal" icon="console" text="Coding Projects" onClick={() => this.setState({page: 3})}/>
              </Navbar.Group>
            </Navbar>
          </header>
        </div>
        <body>
          <div className="App-body" style={{marginTop: 90}}>
            {(this.state.page == 0 && <AboutMe/>) 
            || (this.state.page == 1 && <AirCadets/>) 
            || (this.state.page == 2 && <India/>)
            || (this.state.page == 3 && <CodingProjects />)}
          </div>
        </body>
      </div>
    );
  }
}

export default App;
