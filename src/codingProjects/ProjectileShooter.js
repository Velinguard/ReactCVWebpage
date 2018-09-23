import * as React from 'react';
import {Code, Text, H2, H5, H4} from '@blueprintjs/core';
import {Player} from 'video-react';
import ReactPlayer from 'react-player'
import 'video-react/dist/video-react.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

export function checkStatesPS(states){
    return (states.state.Java && 
        (states.state.Simulation ||
        states.state.Graphics) &&
        (states.state.dateRange[0] <= date && 
            states.state.dateRange[1] >= date));
}

const date = new Date(2017, 4, 1);

export class ProjectileShooter extends React.PureComponent{

    render(){
        return (
            <div class="bp3-running-text .modifier">
				<H2> <i class="fa fa-rocket" style={{color: 'orange'}}/> Projectile Shooter <i class="fa fa-rocket" style={{color: 'orange'}}/></H2>
				<Text> A java package that calculates when a rocket must be launched in order to collide with another rocket in a 2D plane.
				Includes a java application to give a visual representation of the collision. 
				</Text>
				<H5 style={{padding:'0.4', marginTop:'0'}}><a href="https://github.com/Velinguard/Projectile-Shooter"><p> Git Repository</p></a></H5>
				<H4 style={{padding:'0', marginTop:'0'}}>Use of Threads</H4>
				<p> 
					It was important to implement MathsModule as a thread, as in a real life situation you may have multiple missiles being launched at the same time, and you would need to calculate the launch time for these missiles simultaneously. 
				</p>
				<p>
					Furthermore by utilising threads I was able to practice an important part of my Java and coding skill set, having come back to this project after studying threads at University.
				</p>
				<H4>Project Influence</H4>
				<p>
				The idea to develop this software was first considered during my A-Level studies when I was studying Mechanics 3 at A-Level as well as preparing for a STEP 2 exam. I was compelled by one of the questions in the mechanics section of a STEP exam, which required you to work out the time that you should launch a rocket to collide with another. My initial prototype was completed around April 2017 where I was able to complete the task but without the use of threads, and a very rudimentary object structure. Almost a year later I revisited the project, re-writing the code utilising threads, and other techniques such as abstract classes and interfaces, which I learned during my degree studies.
				</p>
				<H4>Example Implementation</H4>
				<p>
					Where missile and aa are Java objects that satisfy the Projectiles interface defined by:
				</p>
				<div style={{textAlign:'left'}}>
					<SyntaxHighlighter language='java' style={docco}>
						{'MathsModule mm = new MathsModule(missile, aa, distanceAway);\n	Thread th = new Thread(mm);\n	th.start();\n\n	//Complete other operations..\n\n	try {\n		th.join();\n	} catch (InterruptedException e) {\n		e.printStackTrace();\n\n}\n \n//To get outputs:\n\ntimeToStart = mm.getTimeToStart();\nxCollide = mm.getxCollide();\nyCollide = mm.getyCollide();\ntimeCollide = mm.getTimeCollide();'}
					</SyntaxHighlighter>
				</div>
				<div style={{textAlign:'left'}}>
					<SyntaxHighlighter language='java' style={docco}>
							{"public interface Projectile {\n	double getSpeed();\n	double getAngle();\n}"}
					</SyntaxHighlighter>
				</div>
				<p>
					Where <Code>getSpeed()</Code> returns the initial velocity of a Projectile in ms<sup>-1</sup>, and <Code>getAngle()</Code> returns the angle of the rocket in radians.
				</p>
				<p> An example of the code being run with the included graphics package is as follows: </p>
				<div style={{width: '70%', height: '70%', float:'centre'}}>
					<ReactPlayer 
						controls
						url={{src: require("./resources/Projectile Shooter.mp4")}}
						width='70%'
						height='70%'
					/>
				</div>
				<a href="https://github.com/Velinguard/Projectile-Shooter"><p> Git Repository</p></a>
            </div>
        );
    }
}