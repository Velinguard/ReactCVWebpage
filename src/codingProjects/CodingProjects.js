import React, { Component } from 'react';
import {Alignment, Button, Checkbox, Classes, Text, Popover, Position, Hotkeys, Hotkey} from '@blueprintjs/core';
import { DateRangePicker } from "@blueprintjs/datetime";
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css'
import './CodingProjects.css';
import {EPQ, checkStatesEPQ} from "./EPQ";
import { checkStatesNNCE, NNCExamProject } from './NNCExamProject';
import { checkStatesNNWP, NNWebsiteProject } from './NNWebsiteProject';
import { checkStatesPS, ProjectileShooter } from './ProjectileShooter';
import { checkStatesSE, StarExplorer } from './StarExplorer';

const filterBoxViewWidth = 700;
 
var windowWidth = window.document.body.clientWidth; 
const FilterBox = {
    width: "10%",
    minWidth: 200,
    height: "100%",
    position: 'fixed',
    display: 'block',
    overflow: 'auto',
    flex: 1,
    zIndex: 8,
    backgroundColor: 'white', 
}
const FilterBackground = {
    backgroundColor: 'rgba(174, 202, 153, 0.3)',
    width: "10%",
    minWidth: 200,
    height: "100%",
}

const Value = {
    display: 'inline-block',
    width: '100%',
    paddingLeft: '5%'
}

var code = {
    width: (windowWidth >= filterBoxViewWidth) ? windowWidth - 200 : "100%",
    marginLeft: (windowWidth >= filterBoxViewWidth) ? 200 : 0,
    display: 'block',
    padding: '1%'
}

function withinRange(firstRange, isInclosedIn){
    return ((isInclosedIn[0] >= firstRange[0] && isInclosedIn[1] <= firstRange[1]) || (isInclosedIn[0] >= firstRange[0] && firstRange[1] == new Date()));
}

function placeWithin(firstRange, toInclose){
    if (firstRange[0] > toInclose[0]){
        firstRange[0] = toInclose[0];
    }
    if (firstRange[1] < toInclose[1]){
        firstRange[1] = toInclose[1];
    }
    if (!withinRange(firstRange, toInclose)){
        alert("Error this should not occur.");
    }
    return firstRange;
}

const firstYearDateRange = [new Date(2017, 9, 8), new Date(2018, 8, 8)];
const beforeUniDateRange = [new Date(2014, 9, 1), new Date(2017, 9, 1)];

export class CodingProjects extends Component{
    constructor(props){
        super(props);
        this.state = {
            Java: true,
            C: true,
            Web: true,
            NN: true,
            AI: true,
            Simulation: true,
            Graphics: true,
            FirstYear: true,
            PreUni: true,
            dateRange: [beforeUniDateRange[0], new Date()],
            filterBoxVisible: false,
        }
    }
    onPress = () => {
        this.setState((prevState) => {Java: false});
    }

    render(){
        return (
            <div className="bp3-running-text .modifier" >
                <div className="SearchBox" >
                    
                    {(windowWidth < filterBoxViewWidth) &&                   
                        <div>
                            <button style={{top: 160, width: 50, height: 100, position: 'fixed', left: (this.state.filterBoxVisible) ? 200: 0, zIndex: 7, opacity: 0}} onClick={() => this.setState(prevState => ({filterBoxVisible: !prevState.filterBoxVisible}))}/>
                            <img 
                                style={{ top: 160, width: 50, height: 100, position: 'fixed', left: (this.state.filterBoxVisible) ? 200: 0, zIndex: 5,}}
                                src={require('./resources/Button.png')}
                                accessibilityLabel="The team of 13 that built the bridge."
                                accessible
                            />
                        </div>
                    }

                    {(windowWidth >= filterBoxViewWidth || this.state.filterBoxVisible) &&
                    <div style={FilterBox}>
                        <div style={FilterBackground}>
                        <Text style={Value}>Date: </Text>
                        <Popover style={Value} 
                            content={        
                                <DateRangePicker 
                                    value={this.state.dateRange}
                                    className={Classes.ELEVATION_1}
                                    onChange={(dateRange) => {
                                        if (dateRange[0] > dateRange[1]){
                                            // Assures bigger date is always in [1].
                                            var bigDate = dateRange[0];
                                            dateRange[0] = dateRange[1];
                                            dateRange[1] = bigDate;
                                            if (dateRange[1] < dateRange[0]){
                                                alert("Logic error, end date is bigger then start date.");
                                            }
                                        }
                                        this.setState({ dateRange });
                                        this.setState(prevState => ({FirstYear: withinRange(dateRange, firstYearDateRange)}))
                                        this.setState(prevState => ({PreUni: withinRange(dateRange, beforeUniDateRange)}))
                                    }}
                                    styles={{zIndex: 9999}}
                                />
                            }
                            target={<Button text="Select Date"/>}
                            align={Alignment.CENTER}
                            position={Position.RIGHT}
                        />
                        <div style={Value}>
                            <Checkbox style={{float: 'left'}} checked={this.state.FirstYear} label="First Year" onChange={() => {
                                this.setState(prevState => ({FirstYear: !prevState.FirstYear}));
                                if (!this.state.FirstYear){ 
                                    this.setState(prevState => ({dateRange: placeWithin(prevState.dateRange, firstYearDateRange)}));
                                } else {
                                    if (this.state.PreUni){
                                        this.setState(prevState => ({dateRange: [beforeUniDateRange[0], beforeUniDateRange[1]]}));
                                    } else {
                                        this.setState(prevState => ({dateRange: [firstYearDateRange[1], new Date()]}));
                                    }
                                }
                                }} />
                        </div>
                        <div style={Value}>
                            <Checkbox style={{float: 'left'}} checked={this.state.PreUni} label="Before University" onChange={() => {
                                this.setState(prevState => ({PreUni: !prevState.PreUni}));
                                if (!this.state.PreUni){ 
                                    this.setState(prevState => ({dateRange: placeWithin(prevState.dateRange, beforeUniDateRange)}));
                                } else {
                                    if (this.state.FirstYear){
                                        this.setState(prevState => ({dateRange: [firstYearDateRange[0], new Date()]}));
                                    } else {
                                        this.setState(prevState => ({dateRange: [new Date(), new Date()]}));
                                    }
                                }
                            }} />
                        </div>
                        <Text style={Value}>Language:</Text>
                        <div style={Value}>
                            <Checkbox style={{float: 'left'}} checked={this.state.Java} label="Java" onChange={() => this.setState(prevState => ({Java: !prevState.Java}))} />
                        </div>
                        <div style={Value}>
                            <Checkbox style={{float: 'left'}} checked={this.state.C} label="C" onChange={() => this.setState(prevState => ({C: !prevState.C}))} />
                        </div>
                        <div style={Value}>
                            <Checkbox style={{float: 'left'}} checked={this.state.Web} label="Web Technologies" onChange={() => this.setState(prevState => ({Web: !prevState.Web}))} />
                        </div>
                        <Text style={Value}>Topic:</Text>
                        <div style={Value}>
                            <Checkbox style={{float: 'left'}} checked={this.state.NN} label="Neural Networks" onChange={() => this.setState(prevState => ({NN: !prevState.NN}))} />
                        </div>
                        <div style={Value}>
                            <Checkbox style={{float: 'left'}} checked={this.state.AI} label="AI" onChange={() => this.setState(prevState => ({AI: !prevState.AI}))} />
                        </div>
                        <div style={Value}>
                            <Checkbox style={{float: 'left'}} checked={this.state.Simulation} label="Simulation" onChange={() => this.setState(prevState => ({Simulation: !prevState.Simulation}))} />
                        </div>
                        <div style={Value}>
                            <Checkbox style={{float: 'left'}} checked={this.state.Graphics} label="Graphics" onChange={() => this.setState(prevState => ({Graphics: !prevState.Graphics}))} />
                        </div>
                    </div></div>
                    }
                </div>
                <div style={code}>
                    {(checkStatesNNCE(this) && <NNCExamProject/>)}
                    {(checkStatesNNWP(this) && <NNWebsiteProject/>)}
                    {(checkStatesPS(this) && <ProjectileShooter/>)}
                    {(checkStatesSE(this) && <StarExplorer/>)}
                    {(checkStatesEPQ(this) && <EPQ/>)}
                </div>
            </div>
        );
    }
}