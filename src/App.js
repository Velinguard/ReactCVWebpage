import React, { Component } from 'react';
import './App.css';
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css';
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css';
import '../node_modules/normalize.css/normalize.css';
import {View, StyleSheet} from 'react-native';
import {Navbar, Alignment, Button} from "@blueprintjs/core";
import {AboutMe} from './aboutme/AboutMe';
import { AirCadets } from './AirCadets/AirCadets';
import { India } from './india/India';
import {CodingProjects} from './codingProjects/CodingProjects';

const styles = StyleSheet.create({
  header : {
    position: 'fixed', 
    zIndex: 9999, 
    width: '100%', 
    backgroundColor: 'rgba(255,255,255,1)', 
    marginTop: -90
  }
})

class App extends Component {
  constructor(props){
    super(props);
    this.state = {page: '3'};
  }
  
  render() {
    return (
      <div className="App">
        <View style={styles.header}>
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
        </View>
        <body>
          <div className="App-body" style={{marginTop: 90}}>
            {(this.state.page == 0 && <AboutMe/>) 
            || (this.state.page == 1 && <AirCadets/>) 
            || (this.state.page == 2 && <India/>)
            || (this.state.page == 3 && <CodingProjects />)}
          </div>
        </body>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
