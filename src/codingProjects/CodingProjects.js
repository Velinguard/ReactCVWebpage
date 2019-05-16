import React, { Component } from 'react';
import {
    Code,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Alignment,
    Button,
    Checkbox,
    Classes,
    Text,
    Popover,
    Position,
    Hotkeys,
    Hotkey,
    Blockquote
} from '@blueprintjs/core';
import { DateRangePicker } from "@blueprintjs/datetime";
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css'
import './CodingProjects.css';
import { checkStatesNNWP, NNWebsiteProject } from './NNWebsiteProject';
import { checkStatesPS, ProjectileShooter } from './ProjectileShooter';
import { checkStatesSE, StarExplorer } from './StarExplorer';
import { checkStatesPintos, Pintos} from './Pintos';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

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

const output= {
    height: 'auto',
    width: ((windowWidth <= 600) ? "100%" : "40%")
}
const structure= {
    height: 'auto',
    width: ((windowWidth <= 600) ? "100%" : "40%")
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

// Takes in a json topic file and returns true if it matches this state
function checkStates(state, data){
    const date = new Date(data.date.year, data.date.month, data.date.day);
    return (
        (state.state.Java || !data.language.java) &&
        (state.state.C || !data.language.c) &&
        (state.state.Web || !data.language.web) &&
        (state.state.NN || !data.topic.nn) &&
        (state.state.AI || !data.topic.ai) &&
        (state.state.Simulation || !data.topic.simulation) &&
        (state.state.Graphics || ! data.topic.graphics) &&
        (state.state.OS || !data.topic.os) &&
        (state.state.dateRange[0] <= date &&
            state.state.dateRange[1] >= date));
}

const data = [require("./projects/nncexam.json"), require("./projects/epq.json")]

function generateHeader(component) {
    if (component.specialchar != null) {
        return [
            <i class={component.specialchar.front.class} style={component.specialchar.front.style} />,
            component.body,
            <i class={component.specialchar.back.class} style={component.specialchar.back.style} />
            ];
    }
    return component.body;
}

function bodyParser(component) {
    switch (component.type) {
        case "h1" :
            return <H1 style={component.style}>{generateHeader(component)}</H1>;
        case "h2" :
            return <H2 style={component.style}>{generateHeader(component)}</H2>;
        case "h3" :
            return <H3 style={component.style}>{generateHeader(component)}</H3>;
        case "h4" :
            return <H4 style={component.style}>{generateHeader(component)}</H4>;
        case "h5" :
            return <H5 style={component.style}>{generateHeader(component)}</H5>;
        case "h6" :
            return <H6 style={component.style}>{generateHeader(component)}</H6>;
        case "text" :
            return <Text style={component.style}>{component.body}</Text>;
        case "reference" :
            return <a href={component.url} style={component.style}>{bodyParser(component.body)}</a>
        case "u-list" :
            return <ul style={component.style}>{
                component.body.map(function(component) {return bodyParser(component)})
            }</ul>
        case "entry" :
            return [<li style={component.style}> {bodyParser(component.label)}</li>,
                component.body.map(function(component) {return bodyParser(component)})]
        case "highlighter" :
            return <SyntaxHighlighter language={component.language} style={docco}>
                {component.body}
            </SyntaxHighlighter>
        case "align-left" :
            return <div style ={{textAlign: 'left'}}>{
                component.body.map(function(component) {return bodyParser(component)})}
            </div>
        case "code" :
            return <Code style={component.style}>{component.body}</Code>
        case "string" :
            return component.body
        case "layered-text" :
            return <Text>{component.body.map(function(component) {return bodyParser(component)})}</Text>
        case "div":
            return <div style={component.style}>{component.body.map(function(component) {return bodyParser(component)})}</div>
        case "image":
            var style = (component.style === "output") ? output : ((component.style === "structure") ? structure : null)
            return <img
                style={style}
                src={images.get(component.src)}
                resizeMethod={component.resizeMethod}
                accessibilityLabel={component.accessibilityLabel}
                accessible={component.accessible}
            />
        case "quote":
            return <Blockquote>"{component.quote}"</Blockquote>,<small style={{width: '70%', marginRight: '15%', marginTop: '0%',  color: 'rgb(100, 100, 100)',  fontSize: '15px',	textAlign: 'right',  float: 'right'}}> ~{bodyParser(component.author)}</small>

}
}

// define images here
var images = new Map()
images.set("structure", require("./resources/structure.png"))
images.set("XORNNOutput", require("./resources/XORNNOutput.png"))
images.set("Button", require("./resources/Button.png"))

function constructArticle(generator) {
    return data.map(function(data) {
        if (checkStates(generator, data)) {
            return data.body.map(function (component) {
                return bodyParser(component)
            })
        }
    })
}

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
            OS: true,
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
                        <div style={Value}>
                            <Checkbox style={{ float: 'left' }} checked={this.state.OS} label="Operating Systems" onChange={() => this.setState(prevState => ({ OS: !prevState.OS }))} />
                        </div>
                    </div></div>
                    }
                </div>
                <div style={code}>
                    {(constructArticle(this))}
                </div>
                <div style={code}>
                    {(checkStatesNNWP(this) && <NNWebsiteProject/>)}
                    {(checkStatesPS(this) && <ProjectileShooter/>)}
                    {(checkStatesSE(this) && <StarExplorer/>)}
                </div>
            </div>
        )
    }
}