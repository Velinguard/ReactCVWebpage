import React, { Component } from 'react';
import {Text} from '@blueprintjs/core';

var windowWidth = window.document.body.clientWidth; 

const portraitStyle= {
    height: 'auto',
    width: (windowWidth >= 400) ? 400 : "70%",
    borderRadius: 100,
    borderWidth: 0
}
const leftAlignStyle= {
    height: 'auto',
    width: (windowWidth >= 250) ? 250 : "70%",
}
const container= {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
}

export class AboutMe extends Component{
    render(){
        return (
            <div style={{padding: "2%"}}>
                <h1 class="bp3-heading"> About me </h1>
                <div style={container}>
                    <img 
                        style={portraitStyle}
                        src={require('../resources/Portrait.JPG')}
                        resizeMethod="contain"
                        accessibilityLabel="A picture of myself."
                        accessible
                    />
                </div>
                <div class="bp3-running-text .modifier">
                    <h4 class="bp3-heading"> Computer Science inbeds itself into the fundamental question of who am I. </h4>
                    <blockquote> "Solving a problem is only the surface of meeting a challenge. Being able to analyse, test and realise the limitations and assumptions required is equally as important."
                    </blockquote> 
                    <h2 text-align="center"> Academic Success </h2>
                    <ul>
                        <li>Achieved a First in my first year of undergraduate study of Computing at Imperial College London.</li>
                        <li>Achieved 93% in our final C exam at Imperial College London.</li>
                        <li>Achieved 85% in our final Java exam at Imperial College London.</li>
                        <li>Achieved second best overall project for our research/website assignment on Feed Forward Neural Networks and Backpropagation, scoring 98%.</li>
                        <li>Awarded the Olivier Award for progress at sixth form by Sophie Richardson (Microsoft Technical Lead for Retail, Data and AI) for my time at St Gregory's Catholic Comprehensive School.</li>
                        <li>Achieved A-Level results of A*A*A*A in Mathematics, Further Mathematics, Computing and Physics A-Levels (respectively)</li>
                        <li>Achieved a B in the AQA Extended Project Qualification.</li>
                        <li>Achieved BTEC qualifications in ... within the Air Cadets.</li>
                    </ul>
                    <div style={container}>
                        <img  
                            style={leftAlignStyle}
                            src={ require('../resources/olivier award.jpg')}
                            resizeMethod="contain"
                            accessibilityLabel="The olivier award with my name engraved upon it."
                            accessible
                        />
                    </div>
                    <h2><i class="fas fa-terminal" style={{color: "#83B98C"}}/> Languages and Technologies </h2>
                    <Text><i class="fab fa-java"></i> Java, C, Haskell, LaTeX, WebTechnologies (React, <i class="fab fa-js-square"></i> JavaScript, HTML, CSS), Linux, Windows. </Text>
                    <h2> Job Status </h2>
                    <p> Actively searching for a summer internship or work experience (Summer 2018). </p>
                </div>
            </div>
        );
    }
}